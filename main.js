const button = document.querySelector("button");

function sound() {
    var audio = document.getElementById("audio");
    audio.play();
}

function click(newColor) {
    var colour = document.getElementById("change");
    colour.style.color = newColor;
}

let sequence = [];//Creation du tableau "sequence", va se voir via fonction ajouter des couleurs de façon aléatoire
let humanSequence = [];//Creation du tableau "humainSequence", aura pour but d'enregistrer les input du joueur
let score = 0;//creation du score en vue de faire un scoreboard


function genSequence() { //Creation fonction de generation de séquence 
    const colors = ['bleu','vert','rouge','jaune']; //Array colors avec 4 couleurs allant de 0 à 3.
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
            nextLvl();
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

//function start() {
//    for (i = 0; i < 4; i++) {
//        genSequence();
//    }
//    console.log(sequence);
//}

function start() { //definition fonction start
    sequence = []; // creation array sequence
    for (i = 0; i < 4; i++) { // condition for avec 1 allant de 0 à 3 generant la fonction genSequence 4 fois.
        genSequence();
    }
    console.log("Séquence de victoire : ",sequence);//console log d'une string avec la sequence.
    displaySequence();//appel de la fonction displaySequence().
}

function highlightButton(color) {//definition de la fonction avec en parametre colorhighlightButton()
    console.log(color); //un console log donnant litteralement chaque couleur une part une
   let buttonColor = document.getElementById("carre" + color);//creation de ma variable buttonColor recherchant dans mon HTML l'ID "carre" avec le parametre couleur. Ca permet d'economiser des lignes de code et de ne pas à avoir ecrire chaque nom.
   console.log(buttonColor);//console log de buttonColor. Donne l'ID complet, quel balise il a et surtout confirme qu'on tombe bien sur le bon bouton.
   buttonColor.style.background = "white";//buttonColor.style.background permet d'accéder au css de ton element. CSS c'est du texte donc il a compris que "white" c'est la couleurs voulu
}

function displaySequence() {//Definition de la fonction displaySequence()
    for (let i = 0; i < sequence.length; i++) {//boucle for avec i valant 0 et prenant +1 tant qu'il est inférieur à la taille de la sequence
        setTimeout(function() {//creation fonction anonyme dans un setTimeout. Il permet de mettre un delais entre chaque couleur. 
            highlightButton(sequence[i]);//appel de la fonction highlightbutton avec en parametre la sequence
        }, 1000 * i);// défini un délai en fonction de la valeur de i, exécutera la fonction dans i*1000ms
    }
}

start();//appel de la fonction start()


