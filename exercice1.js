let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let positionI = monTexte.indexOf('i');

document.getElementById('position').innerHTML += positionI;

let monTexteMaj = monTexte.toUpperCase();

document.getElementById('chaineMaj').innerHTML = monTexteMaj;


for (let i = 0; i < monTexte.length ; i++) {
    if (monTexte[i].includes('i')){
        alert("lettre a trouvé");
    }
}