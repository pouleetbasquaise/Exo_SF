const button = document.querySelector("button");

function sound() {
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


function genSequence() { //Creation fonction de generation de séquence 
    const colors = ['blue','green','red','yellow']; //Array colors avec 4 couleurs allant de 0 à 3.
    const rdm = colors[Math.floor(Math.random() * 4)]; //constante rdm valant la constante colors randomiser allant de 0 à 4 en excluant 4. le floor est la pour descendre à un chiffre rond. (ex : 3.564 => 3)
    sequence.push(rdm); // ajoute en dernière position dans le tableau la dernière couleurs choisi
}

function upScore() {//creation fonction d'update de score
    newScore = document.getElementById("score");//creation de la variable newScore qui ira prendre l'Id score dans mon HTML
    newScore.innerText = 'Score: ' + score;//Vient modifier la balise score afin que le score colle au niveau. (Si j'ai passé un niveau, que mon score gagne +1)
}

function nextLvl() { //Creation fonction changement de niveau
    humanSequence = [];//reinitialisation de humanSequence 
    score++;//ajout de +1 au score
    upScore();//appel fonction upScore pour le mettre à jour sur le scoreboard

        
    
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

function uLoose() {//creation fonction "uLosse"
    alert("Tu as perdu !")//Une alerte explicite
    sequence = [];//reinitialisation de la sequence 
    humanSequence = [];//reinitialisation d'humanSequence
    score = 0;//reinitialisation du score
    
}














