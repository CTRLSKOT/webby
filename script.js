const modal = document.querySelector("[newa]");
const kodal = document.querySelector("[conc]");

if (typeof jQuery !== 'undefined') {
    console.log('jQuery is loaded and ready to use! Прив, бро, че делаешь тут? ну ток не хакай наш сайт пжжж');
} else {
    console.log('jQuery is not loaded! Прив, бро, че делаешь тут? ну ток не хакай наш сайт пжжж /n ох черт блин это не с#. чувак у тебя походу дквери не работает. грустно. я хз как это чинить. ъорошего дня.');
}

function non() {
    modal.showModal();
    
    // Проверяем, была ли уже нажата кнопка закрытия
    if (sessionStorage.getItem('dialogClosed')) {
        // Если была нажата, скрываем кнопку закрытия

        modal.close();
    }
}

function clos() {
    // Сохраняем в sessionStorage факт закрытия
    sessionStorage.setItem('dialogClosed', 'true');
    
    modal.close();
    window.open('https://muz.lc/Synthzone', '_blank');
}

function closer() {
    // Сохраняем в sessionStorage факт закрытия
    sessionStorage.setItem('dialogClosed', 'true');
    
    modal.close();

}

function closa() {
    window.open('https://muz.lc/Synthzone', '_blank');
}

non();