    const dropZone_1 = document.querySelectorAll(".contenedor_dropZone_juguemos")[0];
    const dropZone_2 = document.querySelectorAll(".contenedor_dropZone_juguemos")[1];
    const dropZone_3 = document.querySelectorAll(".contenedor_dropZone_juguemos")[2];

    const imagen_1 = document.querySelectorAll(".img_juguemos")[0];
    const imagen_2 = document.querySelectorAll(".img_juguemos")[1];
    const imagen_3 = document.querySelectorAll(".img_juguemos")[2];
    let imagenesColocadas = 0;

//TRASLADO Y HIDDEN IMAGEN 1 
    const inicioTraslado_imagen_1 = (evento) =>{
        evento.dataTransfer.setData("text","./Material/Info-Trabajo-Final/assets/imagenes/rompe2.png");
    };
    const finTraslado_imagen_1 = (evento) =>{
        let imagen = evento.target;
        imagen.remove();
    };
    imagen_1.addEventListener("dragstart",inicioTraslado_imagen_1);
    imagen_1.addEventListener("dragend",finTraslado_imagen_1);


//TRASLADO Y HIDDEN IMAGEN 2 
    const inicioTraslado_imagen_2 = (evento) =>{
        evento.dataTransfer.setData("text","./Material/Info-Trabajo-Final/assets/imagenes/Rompe1.png");
    };
    const finTraslado_imagen_2 = (evento) =>{
        let imagen = evento.target;
        imagen.remove();
    };
    imagen_2.addEventListener("dragstart",inicioTraslado_imagen_2);
    imagen_2.addEventListener("dragend",finTraslado_imagen_2);


    //TRASLADO Y HIDDEN IMAGEN 3
    const inicioTraslado_imagen_3 = (evento) =>{
        evento.dataTransfer.setData("text","./Material/Info-Trabajo-Final/assets/imagenes/Rompe3.png");
    };
    const finTraslado_imagen_3 = (evento) =>{
        let imagen = evento.target;
        imagen.remove();
    };
    imagen_3.addEventListener("dragstart",inicioTraslado_imagen_3);
    imagen_3.addEventListener("dragend",finTraslado_imagen_3);



    const soltarElemento_zona_1 = (evento) =>{
        let data_imagen = evento.dataTransfer.getData("text");
        dropZone_1.innerHTML = `<img class="img_juguemos" src=${data_imagen} />`;
    }
    

    const soltarElemento_zona_2 = (evento) =>{
        let data_imagen = evento.dataTransfer.getData("text");
        dropZone_2.innerHTML = `<img class="img_juguemos" src=${data_imagen} />`;
    }

    const soltarElemento_zona_3 = (evento) =>{
        let data_imagen = evento.dataTransfer.getData("text");
        dropZone_3.innerHTML = `<img class="img_juguemos" src=${data_imagen} />`;
    }

    const prevenirDefault = (evento) =>{
        evento.preventDefault();
    }

    dropZone_1.addEventListener("dragover",prevenirDefault);
    dropZone_1.addEventListener("drop",soltarElemento_zona_1);

    dropZone_2.addEventListener("dragover",prevenirDefault);
    dropZone_2.addEventListener("drop",soltarElemento_zona_2);

    dropZone_3.addEventListener("dragover",prevenirDefault);
    dropZone_3.addEventListener("drop",soltarElemento_zona_3);


    const boton_reiniciar = document.querySelector(".button_juguemos");

    const reiniciarJuego = () => {
        location.reload();
}
    boton_reiniciar.addEventListener("click", reiniciarJuego);

