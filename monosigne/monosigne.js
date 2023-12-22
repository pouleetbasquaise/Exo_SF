function Encodage(inp) {
    let charPrec = "";// Variable pour stocker le caractère précédent
    let resultat = "";// Variable pour stocker le résultat final de l'encodage

    
    inp.split('').forEach((char, index, array) => {// Parcourt chaque caractère input
        let compteur = 0;// Initialise le compteur

        if (charPrec !== char) {// Verifie diff caractère actuel de caractere precedent
            
            while (index + compteur < array.length && char === array[index + compteur]) {// Compte nbr de carac consecutifs identique
                compteur++;
            }
            charPrec = char;// Met à jour le caractère précéden
            resultat += char === 'A' ? 'B ' + 'B'.repeat(compteur) + ' ' : 'BB ' + 'B'.repeat(compteur) + ' ';// Ajoute à la chaîne résultante l'encodage du motif trouvé
        }
    });
    return resultat.trim();// Retourne le résultat final en supprimant espace final
}

let inputString = prompt("Veuillez entrer une chaîne à encoder:");// Demande au user une string
let resultatEncodage = Encodage(inputString);// Appelle la fonction Encodage avec la string user
alert("Résultat de l'encodage : " + resultatEncodage);// print le resultat