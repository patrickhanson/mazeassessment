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

const textDiv = document.getElementById("textbox")
let playa = undefined
const destination = document.getElementById("map")
let newMap = []

for(let i = 0; i < map.length; i++) {
    let mapColumn = map[i]
    let newColumn = mapColumn.split("")

    newMap.push(newColumn)
}

for(let rowIndex = 0; rowIndex < newMap.length; rowIndex++) {
    let mapRow = newMap[rowIndex]
    const rowDiv = document.createElement("div")
    rowDiv.className = "row"
    rowDiv.id = "row-" + rowIndex
    for(let colIndex = 0; colIndex < mapRow.length; colIndex++) {
        const cell = document.createElement("div")
        cell.dataset.rowIndex = rowIndex
        cell.dataset.colIndex = colIndex
        cell.className = "cell"
        cell.id = "col-" + colIndex
        if(mapRow[colIndex] === "W") {
            cell.dataset.type = "wall"
            cell.classList.add("wall")
        } else if(mapRow[colIndex] === " ") {
            cell.dataset.type = "space"
            cell.classList.add("space")
        } else if(mapRow[colIndex]=== "S") {
            cell.dataset.type = "start"
            cell.classList.add("start")
            cell.id = "start"
        } else if(mapRow[colIndex] === "F") {
            cell.dataset.type = "finish"
            cell.classList.add("finish")
        }
        rowDiv.appendChild(cell)
    }
    destination.appendChild(rowDiv)
}

function setStart() {
    let playaDestination = document.getElementById("start")
    playa = document.createElement("div")
    playa.id = "playa"
    playaDestination.appendChild(playa)       
}

setStart()

document.addEventListener('keydown', (event) => {
    let targetRowIndex = Number(playa.parentElement.dataset.rowIndex)
    let targetColIndex = Number(playa.parentElement.dataset.colIndex)


    if(event.key === 'ArrowDown') {
        targetRowIndex += 1
    } else if(event.key === 'ArrowUp') {
        targetRowIndex -= 1
    } else if(event.key === 'ArrowRight') {
        targetColIndex += 1
    } else if(event.key === 'ArrowLeft') {
        targetColIndex -= 1
    }
    
    const rowSelector = "[data-row-index='" + targetRowIndex + "']"
    const colSelector = "[data-col-index='" + targetColIndex + "']"
    const targetCell = document.querySelector(rowSelector + colSelector)

    if(targetCell.className === "cell space") {
        targetCell.appendChild(playa)
    } else if(targetCell.className === "cell finish") {
        textDiv.textContent = "You now own the Master Sword. Zelda is impressed."
        targetCell.appendChild(playa)
    }
})