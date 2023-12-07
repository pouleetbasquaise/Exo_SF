//Faire un simon

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    button.innerHTML = `Nombre de clics : ${event.detail}`;
})

function sound(params) {
    var audio = document.getElementById("audio");
    audio.sound();
}

function click(newColor) {
    var colour = document.getElementById("change");
    colour.style.color = newColor;
}
let sequence = [];
let humanSequence = [];
const startButton = document.querySelector('.js-start');

//function start(){
    //let colourGame = ["vert","rouge","rouge","bleu"];
    // for (let i = 0; i < 4; i++) {
    //     colourGame[i] = 3*Math.random();//0 = Jaune =,1 vert 2 bleu 3 rouge
    // 
    //colourGame[0]

    
//}
function startGame() {
    startButton.classlist.add('hidden');
}

startButton.addEventListener('click', startGame);