//Lucila Tenutto 93568/8
//Gonzalez Victoria 86848/2


let juego;
let fondo;
let imgDerrota, imgVictoria, imgInicio, imgCreditos, imgInstrucciones, imgDipper;
let song;
let fuente1;
let texto = [];
let reglas = [];
let posicionesTexto = [];

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('data/musica.mp3');
  fondo = loadImage('data/fondo.jpeg');
  fuente1 = loadFont('data/fuente1.ttf');
  imgDerrota = loadImage('data/bill1.jpeg');
  imgVictoria = loadImage('data/victoria.jpeg');
  imgInicio = loadImage('data/inicio.jpeg');
  imgCreditos = loadImage('data/credits.jpeg');
  imgInstrucciones = loadImage('data/fondo_bill.jpg');
  imgDipper = loadImage('data/caradipper.png');
}

function setup() {
  createCanvas(640, 480);
  textFont (fuente1);
  juego = new Juego();
  listaTextos();
  noStroke ();
}

function draw() {
  if (juego.estado === "jugando") {
    image(fondo, 0, 0, width, height);
  }
  juego.actualizar();
  juego.mostrar();
}
  
function mousePressed() {
  let botonX = width - 150;
  let botonY = height - 60;
  let botonAncho = 130;
  let botonAlto = 40;
  let diametro = dist (mouseX, mouseY, 610, 30);
  let radio = 30 / 2;

  if (juego.estado === "inicial") {
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 40 && mouseY < height / 2 + 10) {
      juego.estado = "jugando";
      
    } else if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 20 && mouseY < height / 2 + 70) {
      juego.estado = "creditos";
    } else if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 80 && mouseY < height / 2 + 130) {
      juego.estado = "instrucciones";
    }
  } else if (juego.estado === "creditos" || juego.estado === "instrucciones") {
    if (mouseX > width - 150 && mouseX < width - 20 && mouseY > height - 60 && mouseY < height - 20) {
      if (juego.estado === "creditos") {
      juego.estado = "inicial";
    } else {
      juego.estado = "jugando";
    }
    }
  } else if (juego.estado === "victoria" || juego.estado === "derrota") {
    if (mouseX > width - 150 && mouseX < width - 20 && mouseY > height - 60 && mouseY < height - 20) {
      juego = new Juego();
    }

  }

  if(diamentro < radio){
    if(song.isPlaying){
      song.pause();
    }else{
      song.play();
    }
    }
  }


   
function listaTextos () {
  texto [0] = "Gravity Falls: Un viaje al Raromagedón"; //titulo

  texto [1] = "\nLucila Tenutto\nVictoria Gonzalez"; //creditos

  //reglas
  reglas [0] = "- Objetivo: Recolecta 15 objetos que caen del cielo para salvar Gravity Falls.";
  reglas [1] = "- Evita: Los láseres disparados por Bill. Si te tocan, pierdes una vida!";
  reglas [2] = "- Controles: Mueve a Dipper hacia la izquierda o mueve a Dipper hacia la derecha.";
  reglas [3] = "- Vidas: Tienes 3 vidas. Si las pierdes, el juego termina.";
  reglas [4] = "- Dipper confía en ti, no lo decepciones!";
}
