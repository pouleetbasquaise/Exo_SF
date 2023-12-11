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
let score = 0;


function genSequence() { //Creation fonction de création de séquence 
    const colors = ['blue','green','red','yellow']; //Array colors avec 4 couleurs allant de 0 à3.
    const rdm = colors[Math.floor(Math.random() * 4)]; //constante rdm valant la constante colors randomiser allant de 0 à 4 en excluant 4. le floor est la pour descendre à un chiffre rond. (ex : 3.564 => 3)
    sequence.push(rdm);
}














//function start(){
    //let colourGame = ["vert","rouge","rouge","bleu"];
    // for (let i = 0; i < 4; i++) {
    //     colourGame[i] = 3*Math.random();//0 = Jaune =,1 vert 2 bleu 3 rouge
    // 
    //colourGame[0]

    
//}
//function startGame() {
 //   startButton.classlist.add('hidden');
//}

//startButton.addEventListener('click', startGame);