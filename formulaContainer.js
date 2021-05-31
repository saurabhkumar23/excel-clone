let cells = document.querySelectorAll('.grid .cell')
let addressInput = document.querySelector('.address-input')

// change address on cell click
for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click',function(){
        let rid = cells[i].getAttribute('rid')
        let cid = cells[i].getAttribute('cid')
        rid = Number(rid)
        cid = Number(cid)
        addressInput.value = `${String.fromCharCode(65 + cid)}${rid + 1}`
    })
}

// first cell is clicked at initial
cells[0].click()


