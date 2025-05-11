function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";
  
    const frases = [
      {
        texto: "Cada día te superas y no te detienes.",
        imagen: "imagen.jpg"
      },
      {
        texto: "Tu amor de madre es un ejemplo poderoso.",
        imagen: "imagen2.jpg"
      },
      {
        texto: "Tu luz inspira a quienes te rodean.",
        imagen: "imagen3.jpg"
      },
      {
        texto: "Gracias por ser como eres.",
        imagen: "imagen5.jpg"
      },
      {
        texto: "Eres una madre admirable y una persona única.",
        imagen: "imagen4.jpg"
      }
    ];
  
    let index = 0;
    const fraseCarrusel = document.getElementById("frase-carrusel");
    const imagenCarrusel = document.getElementById("imagen-carrusel");
  
    fraseCarrusel.textContent = frases[index].texto;
    imagenCarrusel.src = frases[index].imagen;
  
    setInterval(() => {
      index = (index + 1) % frases.length;
      fraseCarrusel.textContent = frases[index].texto;
      imagenCarrusel.src = frases[index].imagen;
    }, 6000);
  }
  