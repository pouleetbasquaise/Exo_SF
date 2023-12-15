function userClick(color) {
    console.log(color);
    var audio = document.getElementById("audio");
    audio.play();
    if (userClick = True) {
        
    }
}

let sequence = [];//Creation du tableau "sequence", va se voir via fonction ajouter des couleurs de façon aléatoire
//let humanSequence = [];//Creation du tableau "humanSequence", aura pour but d'enregistrer les input du joueur
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
    //humanSequence = [];//reinitialisation de humanSequence 
    score++;//ajout de +1 au score
    upScore();//appel fonction upScore pour le mettre à jour sur le scoreboard    
    start();//relance le jeu
}

//function checkGen() {//definition fonction checkGen
//    for (i = 0; i < sequence.length; i++){//condition for avec i valant 0 prenant +1 si inférieur a la taille de la sequence bouclant tant que cette condition est active 
//        if (humanSequence.length === sequence.length) {//condition if avec recherche d'égalité strict entre humanSequence et sequence
//            nextLvl();//si True, alors appel de la fonction nextLvl()
//        }
//        else{
//            uLoose();//Sinon appel de la fonction uLoose()
//            return;   
//        }
//
//    }
//}




function uLoose() {//creation fonction "uLosse"
    alert("Tu as perdu !")//Une alerte explicite
    sequence = [];//reinitialisation de la sequence 
    //humanSequence = [];//reinitialisation d'humanSequence
    score = 0;//reinitialisation du score
    
}

//                  test pour ramener couleur mais fonctionne pas encore

var redColor = "#C70039" ;
var blueColor = "#56A1D3" ;
var greenColor = "#2EB867"; 
var yellowColor = "#F1C40F";

function changeBackgColor(color) {
    let buttonColor = document.getElementById("carre" + color);
    buttonColor.style.background = "white";
}

function restorBackgColor(color) {
    document.getElementById("carre" + color).style.background
    if (document.getElementById === "carrerouge") {
        buttonColor.style.background = redColor;
    }
    else if(document.getElementById === "carrebleu"){
        buttonColor.style.background = blueColor;
    }
    else if(document.getElementById === "carrevert"){
        buttonColor.style.background = greenColor;
    }
    else if(document.getElementById === "carrejaune"){
        buttonColor.style.background = yellowColor;
    }   
    else
        alert("hein...?");
        
}

//                  test va jusque la 



function start() { //definition fonction start
    sequence = []; // creation array sequence
    for (i = 0; i < 4; i++) { // condition for avec i allant de 0 à 3 generant la fonction genSequence 4 fois.
        genSequence();
    }
    console.log("Séquence de victoire : ",sequence);//console log d'une string avec la sequence.
    displaySequence();//appel de la fonction displaySequence().
    
}



function highlightButton(color) {//definition de la fonction avec en parametre colorhighlightButton()
    console.log(color); //un console log donnant litteralement chaque couleur une part une
    let buttonColor = document.getElementById("carre" + color);//creation de ma variable buttonColor recherchant dans mon HTML l'ID "carre" avec le parametre couleur. Ca permet d'economiser des lignes de code et de ne pas à avoir ecrire chaque nom.
    console.log(buttonColor);//console log de buttonColor. Donne l'ID complet, quel balise il a et surtout confirme qu'on tombe bien sur le bon bouton.
    let saveColor = buttonColor.style.background;
    buttonColor.style.background = "white";//buttonColor.style.background permet d'accéder au css de l'element. CSS étant du texte, il a compris que "white" est la couleurs voulu
        setTimeout(function() {
            buttonColor.style.background = saveColor;
        }, 500);     
    }


function displaySequence() {//Definition de la fonction displaySequence()
    for (let i = 0; i < sequence.length; i++) {//boucle for avec i valant 0 et prenant +1 tant qu'il est inférieur à la taille de la sequence
        setTimeout(function() {//creation fonction anonyme dans un setTimeout. Il permet de mettre un delais entre chaque couleur. 
            highlightButton(sequence[i]);//appel de la fonction highlightbutton avec en parametre la sequence
        }, 1000 * i);// défini un délai en fonction de la valeur de i, exécutera la fonction dans i*1000ms
    }
}

//function checkGen() {//definition fonction checkGen
//    for (i = 0; i < sequence.length; i++){//condition for avec i valant 0 prenant +1 si inférieur a la taille de la sequence bouclant tant que cette condition est active 
//        if(humanSequence[i] !== sequence[i]){
//            uLoose();//Sinon appel de la fonction uLoose()
//        return;
//        }
//    }
//    if (humanSequence.length === sequence.length) {
//        nextLvl();
//    }
//}

start();//appel de la fonction start()


