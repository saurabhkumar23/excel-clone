let addSheetBtn = document.querySelector('.add-sheet_btn-container')
let sheetList   = document.querySelector('.sheet-list')
let firstSheet = document.querySelector('.sheet')

// initial manual work, for first sheet only
firstSheet.addEventListener('click',makeMeActive)

// on click - append new sheet at the end (add class,update idx,set as .active)
addSheetBtn.addEventListener('click',function(){
    let allSheets = document.querySelectorAll('.sheet')
    let lastSheet = allSheets[allSheets.length-1]               // using last sheet to update idx
    let lastIdx = lastSheet.getAttribute('idx')
    lastIdx = Number(lastIdx)
    let newSheet = document.createElement('div')           // creating and append new sheet
    for(let i=0;i<allSheets.length;i++){                      
        allSheets[i].classList.remove('active')          // last sheet become .active by deactivating all others
    }
    newSheet.setAttribute('class','sheet active')
    newSheet.setAttribute('idx',`${lastIdx+1}`)
    newSheet.innerText = `Sheet ${lastIdx+2}`
    sheetList.appendChild(newSheet)

    // on click - that sheet become .active by deactivating all others (do it for first sheet manually)
    newSheet.addEventListener('click',makeMeActive)
})

// that sheet become .active by deactivating all others
function makeMeActive(e){
    let currentSheet = e.currentTarget
    let allSheets = document.querySelectorAll('.sheet')         // again get, bcz of last sheet updation
    for(let i=0;i<allSheets.length;i++){                      
        allSheets[i].classList.remove('active')
    }
    currentSheet.classList.add('active')
}