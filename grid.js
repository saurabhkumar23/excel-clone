// this script is for implementing grid...

let leftCol = document.querySelector('.left_col')
let rows = 100

// left_col
for (let i = 0; i < rows; i++) {
    let colBox = document.createElement("div")
    colBox.innerText = i + 1
    colBox.setAttribute("class", "box")
    leftCol.appendChild(colBox)
}



// let leftCol = document.querySelector(".left_col");
// let topRow = document.querySelector(".top_row");
// let grid = document.querySelector(".grid");
// current clicked cell address
// let addressInput = document.querySelector(".address-input");
// let boldBtn = document.querySelector(".bold");
// let underlineBtn = document.querySelector(".underline");
// let italicBtn = document.querySelector(".italic");
// let alignBtns = document.querySelectorAll(".align-container>*");
// let fontSizeElem = document.querySelector(".font-size");
// let rows = 100;
// // let cols = 26;
// // left_col
// for (let i = 0; i < rows; i++) {
//     let colBox = document.createElement("div");
//     colBox.innerText = i + 1;
//     colBox.setAttribute("class", "box");
//     leftCol.appendChild(colBox);
// }
// // top_row
// for (let i = 0; i < cols; i++) {
//     let cell = document.createElement("div");
//     cell.innerText = String.fromCharCode(65 + i);
//     // setAttribute
//     cell.setAttribute("class", "cell");
//     topRow.appendChild(cell);
// }