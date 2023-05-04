const videoFondo = document.getElementById("video_historia");

const reproducir = document.querySelectorAll(".boton_video")[0];
const pausa = document.querySelectorAll(".boton_video")[1];

const duracion = document.getElementById("duracion");

videoFondo.addEventListener('loadedmetadata', function() {
  duracion.textContent = videoFondo.duration.toFixed(2);
});

reproducir.addEventListener("click",()=>{
    videoFondo.play();
});

pausa.addEventListener("click",()=>{
    videoFondo.pause();
});