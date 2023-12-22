let playing = false;
let y = 0;//placeholder de y valant 0


function userClick(color) {
    if (playing){//jouer avec le playing true false pour que utilisateur puisse pas clicker sur bp
        if (color != sequence[y]){//Si color different de la sequence alors... . Le sequence[y] veut dire : L'index Y navigue dans séquence. Dans ce cas, Y = 2 ira dans la position 2 de sequence.
            uLoose();
        }
        else {
            console.log("correct");
            y++;//incrémente y pour avancer dans l'array. Si Y vaut 0, il gagnera +1 afin d'aller à la position suivante dans l'array.
        }
        
        if (sequence.length == y ) {
            console.log('win');
            nextLvl();
            var audio = document.getElementById("audio" + color);
            audio.play(); 
        }
    }
    
}
//Faire un test avec sequence.forEach(start);

let sequence = [];//Creation du tableau "sequence", va se voir via fonction ajouter des couleurs de façon aléatoire
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
    score++;//ajout de +1 au score
    upScore();//appel fonction upScore pour le mettre à jour sur le scoreboard    
    start();//relance le jeu
    y = 0;//Reset la position de Y pour revenir au du array sequence[]
}

function uLoose() {//creation fonction "uLosse"
    alert("Tu as perdu !")//Une alerte explicite
    sequence = [];//reinitialisation de la sequence 
    newScore = document.getElementById("score");//creation de la variable newScore qui ira prendre l'Id score dans mon HTML
    newScore.innerText = 'Score: ' + 0; 
    score = 0;  
    y = 0; 
    return score, y, sequence;
}

function start() { //definition fonction start
    genSequence();//generation de la sequence de maniere aléatoire
    playing = true;//playing passe à true. Une sécurité pour la fonction userClick. Afin de pouvoir rentrer dans les loops de check de séquence
    console.log("Séquence de victoire : ",sequence);//console log d'une string avec la sequence.
    displaySequence();//appel de la fonction displaySequence().    
}



function highlightButton(color) {//definition de la fonction avec en parametre colorhighlightButton()
    console.log(color); //un console log donnant litteralement chaque couleur une part une
    let buttonColor = document.getElementById("carre" + color);//creation de ma variable buttonColor recherchant dans mon HTML l'ID "carre" avec le parametre couleur. Ca permet d'economiser des lignes de code et de ne pas à avoir ecrire chaque nom.
    console.log(buttonColor);//console log de buttonColor. Donne l'ID complet, quel balise il a et surtout confirme qu'on tombe bien sur le bon bouton.
    let saveColor = buttonColor.style.background;//création d'une variable faisant office de mémoire de couleur. Permet de ramener la couleur d'origine .
    buttonColor.style.background = "white";//buttonColor.style.background permet d'accéder au css de l'element. CSS étant du texte, il a compris que "white" est la couleurs voulu
        setTimeout(function() {
            buttonColor.style.background = saveColor;
        }, 500);     
    }


function displaySequence() {//Definition de la fonction displaySequence()
    for (let i = 0; i < sequence.length; i++) {//boucle for avec i valant 0 et prenant +1 tant qu'il est inférieur à la taille de la sequence
        setTimeout(function() {//creation fonction anonyme dans un setTimeout. Il permet de mettre un delais entre chaque couleur. 
            console.log(sequence[i]);
            highlightButton(sequence[i]);//appel de la fonction highlightbutton avec en parametre la sequence
        }, 1000 * i);// défini un délai en fonction de la valeur de i, exécutera la fonction dans i*1000ms
    }
}

start();//appel de la fonction start()


