const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

const destination = document.getElementById("map")

let newMap = []

for(let i = 0; i < map.length; i++) {
    let mapColumn = map[i]
    let newColumn = mapColumn.split("")
    newMap.push(newColumn)
}

for(let column = 0; column < newMap.length; column++) {
    let mapColumn = newMap[column]
    const columnDiv = document.createElement("div")
    columnDiv.className = "column"
    columnDiv.setAttribute("id", ("column" + column))
    for(let row = 0; row < mapColumn.length; row++) {
        const cell = document.createElement("div")
        if(mapColumn[row] === "W") {
            cell.className = "wall"
        } else if(mapColumn[row] === " ") {
            cell.className = "space"
        } else if(mapColumn[row]=== "S") {
            cell.className = "start"
            cell.setAttribute("id", "start")
        } else if(mapColumn[row] === "F") {
            cell.className = "finish"
        }
        columnDiv.appendChild(cell)
    }
    destination.appendChild(columnDiv)
}

function setStart() {
    let boxDestination = document.getElementById("start")
    let box = document.createElement("div")
    box.className = "box"
    box.setAttribute("id", "box")
    boxDestination.appendChild(box)
}

setStart()

let boxTop = 200;
let boxLeft = 200;

'use strict';

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(event.key === 'ArrowDown') {
        boxTop += 10
    } else if(event.key === 'ArrowUp') {
        boxTop -= 10
    }
    document.getElementById("box").style.top = boxTop + "px";
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
        boxLeft += 10
    } else if(event.key === 'ArrowLeft') {
        boxLeft -= 10
    }
    document.getElementById("box").style.left = boxLeft + "px"
})
