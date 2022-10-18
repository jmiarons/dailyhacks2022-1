const N = 8;

setInterval(updateBoard, 10000);
  

function advanceTime() {
  updateBoard();
}

function updateBoard() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (isBreakingRules(i, j)) {
        swapStatus(""+i+j);
      }
    }
  }
}

function isBreakingRules(i, j) {
  let aliveCount = countNeighbors(i, j);

  let status = getStatus(""+i+j);
  if (status == "alive") {
    if (aliveCount < 2 || aliveCount > 3) {
      swapStatus(""+i+j);
    } 
  } else {
    if (aliveCount == 3) {
      swapStatus(""+i+j);
    }
  }
}

function countNeighbors(i, j) {
  if (isEdge(i, j)) {
    if (i == 0) {
      if (j == 0) {
        return getTopLeftNeighbors(i, j);
      } else if (j == N-1) {
        return getTopRightNeighbors(i, j);
      } else {
        return getTopEdgeNeighbors(i, j);
      }
    } else if (i == N-1) {
      if (j == 0) {
        return getBottomLeftNeighbors(i, j);
      } else if (j == N-1) {
        return getBottomRightNeighbors(i, j);
      } else {
        return getBottomEdgeNeighbors(i, j);
      }
    }
    if (j == 0) {
      return getLeftEdgeNeighbors(i, j);
    } else if (j == N-1) {
      return getRightEdgeNeighbors(i, j);
    }
  } else {
    return getNeighbors(i, j);
  }
}

function getNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i-1; ii <= i+1; ii++) {
    for (let jj = j-1; jj <= j+1; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getTopLeftNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i; ii <= i+1; ii++) {
    for (let jj = j; jj <= j+1; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getTopRightNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i; ii <= i+1; ii++) {
    for (let jj = j-1; jj <= j; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getTopEdgeNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i; ii <= i+1; ii++) {
    for (let jj = j-1; jj <= j+1; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getBottomLeftNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i-1; ii <= i; ii++) {
    for (let jj = j; jj <= j+1; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getBottomRightNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i-1; ii <= i; ii++) {
    for (let jj = j-1; jj <= j; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getBottomEdgeNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i-1; ii <= i; ii++) {
    for (let jj = j-1; jj <= j+1; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getLeftEdgeNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i-1; ii <= i+1; ii++) {
    for (let jj = j; jj <= j+1; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function getRightEdgeNeighbors(i, j) {
  let aliveCount = 0;
  for (let ii = i-1; ii <= i+1; ii++) {
    for (let jj = j-1; jj <= j; jj++) {
      if (ii != i || jj != j) {
        let status = getStatus(""+ii+jj);
        if (status == "alive") {
          aliveCount++;
        }
      }
    }
  }
  return aliveCount;
}

function isEdge(i, j) {
  if (i == 0 || i == N-1) 
   return true;
  if (j == 0 || j == N-1)
    return true;
  return false;
}

function getStatus(id) {
  let className = document.getElementById(id).className;
  return className;
}

function swapStatus(id) {
  let status = document.getElementById(id).className;
  if (status == "dead") {
    document.getElementById(id).className = "alive";
  } else {
    document.getElementById(id).className = "dead";
  }
}
