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

let sequence = [];//Creation du tableau "sequence", va se voir via fonction ajouter des couleurs de façon aléatoire
let humanSequence = [];//Creation du tableau "humainSequence", aura pour but d'enregistrer les input du joueur
let score = 0;//creation du score en vue de faire un scoreboard


function genSequence() { //Creation fonction de création de séquence 
    const colors = ['blue','green','red','yellow']; //Array colors avec 4 couleurs allant de 0 à 3.
    const rdm = colors[Math.floor(Math.random() * 4)]; //constante rdm valant la constante colors randomiser allant de 0 à 4 en excluant 4. le floor est la pour descendre à un chiffre rond. (ex : 3.564 => 3)
    sequence.push(rdm); // ajoute en dernière position dans le tableau la dernière couleurs choisi
    
    return rdm;
}
function levelGame() {
    for (let difficult = 0; difficult < array.length; index++) {
        
        
    }
}

function checkGen() {
    for (i = 0; i < sequence.length; i++){
        if (humanSequence === sequence) {
            //ajouter niveau suivant, renitialiser la sequence
            return;
        }
        else{
            uLoose();
            return;
        }

    }
}

function uLoose() {
    alert("Tu as perdu !")
    sequence = [];
    humanSequence = [];
    score = 0;
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