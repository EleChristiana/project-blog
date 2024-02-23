let button = document.querySelector(".btn1");

let button2 = document.querySelector(".btn2");

let button3 = document.querySelector(".btn3");

function move (){
    button.addEventListener('click', ()=>{
        location.href ="https://elechristiana.github.io/counter-app"
    })

    button2.addEventListener('click', ()=>{
        location.href ="https://elechristiana.github.io/Quiz-App/"
    })

    button3.addEventListener('click', ()=>{
        location.href ="https://elechristiana.github.io/MI/"
    })
}

move()