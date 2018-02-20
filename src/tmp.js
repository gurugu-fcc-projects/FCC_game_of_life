var c = document.getElementById("c"),
  ctx = c.getContext("2d"),
  cells,
  cellSize,
  tick = 1,
  set = {
    grid: 30,
    slower: 10
  },
  colors = {
    dead: "#0a0911",
    alive: "#5915bb"
  },
  run = false;

function Cell(x, y, i, j, status) {
  this.x = x;
  this.y = y;
  this.i = i;
  this.j = j;
  this.status = status;
  this.tmp = "dead";
}

function drawCell(cell) {
  ctx.beginPath();
  ctx.fillStyle = colors[cell.status];
  ctx.rect(cell.x, cell.y, cellSize, cellSize);
  ctx.fill();
  ctx.stroke();
}

function drawGrid(clear) {
  cells = [];

  for (var i = 0; i < set.grid; i++) {
    var tmp = [];
    for (var j = 0; j < set.grid; j++) {
      var x = i * cellSize,
        y = j * cellSize,
        st = clear ? "dead" : Math.random() > 0.85 ? "alive" : "dead",
        cell = new Cell(x, y, i, j, st);
      tmp.push(cell);
      drawCell(cell);
    }
    cells.push(tmp);
  }
}

function resize() {
  run = false;
  tick = 1;
  var s = Math.min(window.innerWidth, window.innerHeight);
  c.width = s;
  c.height = s;
  cellSize = s / set.grid;
  c.style.setProperty("--size", s + "px");
  drawGrid();
}
resize();
window.addEventListener("resize", resize);

var gui = new dat.GUI(),
  col = gui.addFolder("Colors"),
  btns = {
    Run: function(e) {
      run = true;
    },
    Stop: function() {
      run = false;
    },
    Clear: function() {
      run = false;
      drawGrid(true);
    }
  };

col.addColor(colors, "dead");
col.addColor(colors, "alive");
gui.add(set, "grid", 1, 50, 1);
gui.add(set, "slower", 1, 100, 1);
gui.add(btns, "Run");
gui.add(btns, "Stop");
gui.add(btns, "Clear");

for (var i in gui.__controllers) {
  if (i == 1 || gui.__controllers[i].__button) continue;
  gui.__controllers[i].onChange(function() {
    resize();
  });
}

for (var i in gui.__folders) {
  for (var j in gui.__folders[i].__controllers) {
    gui.__folders[i].__controllers[j].onChange(function() {
      resize();
    });
  }
}

function checkStatus(cell) {
  var neighbours = [],
    i = cell.i,
    j = cell.j,
    status = "dead",
    aliveCount = 0;

  if (j > 0) {
    neighbours.push(cells[i][j - 1]);
    if (i > 0) neighbours.push(cells[i - 1][j - 1]);
    if (i < set.grid - 1) neighbours.push(cells[i + 1][j - 1]);
  }

  if (j < set.grid - 1) {
    neighbours.push(cells[i][j + 1]);
    if (i > 0) neighbours.push(cells[i - 1][j + 1]);
    if (i < set.grid - 1) neighbours.push(cells[i + 1][j + 1]);
  }

  if (i > 0) {
    neighbours.push(cells[i - 1][j]);
  }

  if (i < set.grid - 1) {
    neighbours.push(cells[i + 1][j]);
  }

  for (var k = 0; k < neighbours.length; k++) {
    if (neighbours[k].status == "alive") {
      aliveCount++;
    }
  }

  if (cell.status == "alive") {
    if (aliveCount < 2 || aliveCount > 3) {
      status = "dead";
    } else {
      status = "alive";
    }
  } else {
    if (aliveCount == 3) {
      status = "alive";
    }
  }

  cell.tmp = status;
}

function life() {
  for (var i = 0; i < set.grid; i++) {
    for (var j = 0; j < set.grid; j++) {
      checkStatus(cells[i][j]);
    }
  }

  for (var i = 0; i < set.grid; i++) {
    for (var j = 0; j < set.grid; j++) {
      cells[i][j].status = cells[i][j].tmp;
      drawCell(cells[i][j]);
    }
  }
}

function findCellByPos(x, y) {
  for (var i = 0; i < set.grid; i++) {
    for (var j = 0; j < set.grid; j++) {
      var cell = cells[i][j];
      if (
        cell.x < x &&
        cell.x + cellSize > x &&
        (cell.y < y && cell.y + cellSize > y)
      ) {
        return cell;
      }
    }
  }
}

function defineCell(cell) {
  if (cell) {
    cell.status = cell.status == "alive" ? "dead" : "alive";
    drawCell(cell);
  }
}

var pressed = false,
  target = "";

c.addEventListener("mouseup", function() {
  pressed = false;
});

document.addEventListener("mouseup", function() {
  pressed = false;
});

c.addEventListener("mousedown", function(e) {
  pressed = true;
  target = findCellByPos(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);

  defineCell(target);

  c.addEventListener("mousemove", function(e) {
    var cell = findCellByPos(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);

    if (
      !pressed ||
      !target ||
      !cell ||
      (target.x == cell.x && target.y == cell.y)
    ) {
      return false;
    }
    defineCell(cell);
    target = cell;
  });
});

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function update() {
  if (run && tick % set.slower == 0) {
    life();
  }
  tick++;
  window.requestAnimFrame(update);
}
update();
