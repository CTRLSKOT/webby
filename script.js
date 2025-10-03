const modal = document.querySelector("[newa]");
const kodal = document.querySelector("[conc]");
function non() {
    modal.showModal()
}


function clos() {
    modal.close()
    window.open('https://muz.lc/Synthzone', '_blank')
    kodal.showModal()
}


function closa() {
    window.open('https://muz.lc/Synthzone', '_blank')
    kodal.close()
}



non()