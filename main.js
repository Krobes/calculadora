const valoresTeclas = document.querySelectorAll("a");
const pantalla = document.getElementById("screen");
let contenidoTecla;
let operacion = "";

valoresTeclas.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    contenidoTecla = elemento.dataset.key;
    try{
      if(contenidoTecla == "equal"){
        operacion = eval(operacion);
        pantalla.textContent = operacion;
      }
      else if (contenidoTecla == "clear"){
        pantalla.textContent = "";
        operacion = "";
      }
      else
      {
        operacion+=contenidoTecla;
        pantalla.textContent = operacion;
      }
    }catch(error){
      alert(error);
      pantalla.textContent = "";
      operacion = "";
    } 
  });
});

/*let teclasDisponibles = {
  C: "clear", 
  o: "/",
  j: "*",
  k: "+", 
  m: "-", 
  13: "equal", 
  1: "1", 
  2: "2", 
  3: "3", 
  4: "4", 
  5: "5", 
  6: "6", 
  7: "7", 
  8: "8", 
  9: "9", 
  0: "0"};

function pulsarTecla(event){
  teclaPulsada = String.fromCharCode(event.which)
  if(teclasDisponibles.hasOwnProperty(teclaPulsada)){
    teclaPulsada = teclasDisponibles[teclaPulsada];
    console.log(teclaPulsada);
    try{
      if(teclaPulsada == "equal"){
        operacion = eval(operacion);
        pantalla.textContent = operacion;
      }
      else if (teclaPulsada == "clear"){
        pantalla.textContent = "";
        operacion = "";
      }
      else
      {
        operacion+=teclaPulsada;
        pantalla.textContent = operacion;
      }
    }catch(error){
      alert(error);
      pantalla.textContent = "";
      operacion = "";
    } 
  }
} */