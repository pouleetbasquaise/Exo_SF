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