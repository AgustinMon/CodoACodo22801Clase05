import Button from "./components/boton.js";
import Video from "./components/video.js";
import Audio from "./components/audio.js";
import Lista from "./components/lista.js";
import Input from "./components/input.js";

const myApp = document.getElementById("myApp");
let myButton = new Button("Este botón no hace nada", "btn btn-outline-danger");
let myVideo = new Video("./media/movie.mp4", 315, 315, "");
let myAudio = new Audio("");
let myLista = new Lista(["pera","manzana","banana","uva","kiwi"],"");
let myInput = new Input();

myApp.innerHTML = `${myInput.render()} ${myVideo.render()} ${myAudio.render()} ${myButton.render()} ${myLista.render()} `;

myInput.evaluar();
