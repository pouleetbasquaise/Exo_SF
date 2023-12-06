//Faire un simon

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    button.innerHTML = `Nombre de clics : ${event.detail}`;
})

function play(params) {
    var audio = document.getElementById("audio");
    audio.play();
}