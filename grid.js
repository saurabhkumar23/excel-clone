// this script is for implementing grid...

let leftCol = document.querySelector('.left_col')
let topRow = document.querySelector('.top_row')
let grid = document.querySelector('.grid')

let rows = 100
let cols = 26

// left_col
for (let i = 0; i < rows; i++) {
    let colBox = document.createElement("div")
    colBox.innerText = i + 1
    colBox.setAttribute("class", "box")
    leftCol.appendChild(colBox)
}

// top_row
for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div")
    cell.innerText = String.fromCharCode(65 + i)
    cell.setAttribute("class", "cell")
    topRow.appendChild(cell)
}

// grid
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div")
    row.setAttribute("class","row")
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div") 
        // each cell will have - .cell,rid,cid,contenteditable
        //cell.innerText = `${i}${j}`
        cell.setAttribute("class", "cell")
        cell.setAttribute("rid", i)
        cell.setAttribute("cid", j)
        //cell.setAttribute("contenteditable","true")
        row.appendChild(cell)
    }
    grid.appendChild(row)
}



// current clicked cell address
// let addressInput = document.querySelector(".address-input");
// let boldBtn = document.querySelector(".bold");
// let underlineBtn = document.querySelector(".underline");
// let italicBtn = document.querySelector(".italic");
// let alignBtns = document.querySelectorAll(".align-container>*");
// let fontSizeElem = document.querySelector(".font-size");
