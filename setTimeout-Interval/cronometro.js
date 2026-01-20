const watch = document.querySelector(".timer-text");

function watchAction (){

function createSeconds(sec){

    const data = new Date(sec * 1000)

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: 'UTC'
    });
};

let timer;
let seconds = 0;

function startWatch(){

    if (seconds === 0){ watch.textContent = "00:00:01"; seconds = 1};

    timer = setInterval(() => {
        watch.textContent = createSeconds(seconds++);
    }, 1000);
};

document.addEventListener("click", (e) => {

    const el = e.target;

    if (el.classList.contains('reset')){

        watch.textContent = '00:00:00';
        clearInterval(timer);
        seconds = 0;
        watch.style.color = 'white';
    };

    if (el.classList.contains('start')){
        watch.style.color = 'white';
        startWatch();
    };

    if (el.classList.contains('pause')){

        clearInterval(timer);
        watch.style.color = 'black';
    };
});
}
watchAction();