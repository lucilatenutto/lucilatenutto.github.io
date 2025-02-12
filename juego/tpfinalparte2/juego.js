class Juego {
  constructor() {
    this.dipper = new Dipper();
    this.bill = new Bill(this.dipper);
    this.objetosRecolectados = 0;
    this.vidas = 3;
    this.estado = "jugando";
    this.estado = "inicial";
  }
  
  actualizar() {
    if (this.estado === "jugando") {
      this.dipper.mover();
      this.bill.lanzarObjetos();
      this.bill.lanzarLaseres();

      for (let obj of this.bill.objetos) {
        if (this.dipper.tocaCirculo(obj)) {
          this.objetosRecolectados++;
          this.bill.removerObjeto(obj);
        }
      }
      for (let laser of this.bill.laseres) {
        if (this.dipper.tocaRectangulo(laser) && !laser.toco) {
          laser.toco = true;
          this.vidas--;
          this.bill.removerLaser(laser);
          if (this.vidas <= 0) {
            this.estado = "derrota";
          }
        }
      }

      if (this.objetosRecolectados >= 15) {
        this.estado = "victoria";
      }
    }
  }

  mostrar() {
    if (this.estado === "inicial") {
      this.mostrarInicio();
      textSize(45);
      fill (247, 255, 39);
      textAlign (CENTER, CENTER);
      text (texto[0], width / 2, 150);
    } else if (this.estado === "creditos") {
      this.mostrarCreditos();
      fill(255);
      textSize(30);
      textAlign(CENTER, CENTER);
      text (texto[1], width / 2, 80);
    } else if (this.estado === "instrucciones") {
      this.mostrarInstrucciones();
      fill (0);
      textSize(21);
      textAlign(CENTER, CENTER);
      for ( let i = 0; i < reglas.length; i++ ) {  
        text( reglas[i], width / 2, 180 + i*40 );
      }
    } else if (this.estado === "jugando") {
      this.dipper.mostrar();
      this.bill.mostrar();
      fill(255);
      textSize(20);
      text("objetos recolectados: " + this.objetosRecolectados, 10, 20);
      text("vidas: " + this.vidas, 10, 40);
    } else if (this.estado === "victoria") {
      image(imgVictoria, 0, 0, width, height);
      fill(255);
      textSize(35);
      textAlign(CENTER, CENTER);
      text("Lo lograste!!", 100, 40);
      fill(9, 77, 13);
      rect(width - 150, height - 60, 130, 40, 10);
      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Reiniciar", width - 85, height - 40);
    } else if (this.estado === "derrota") {
      image(imgDerrota, 0, 0, width, height);
      fill(255, 0, 0);
      textSize(30);
      textAlign(CENTER, CENTER);
      text("Bill se apoderó del universo!!", 150, 50);
      fill(9, 77, 13);
      rect(width - 150, height - 60, 130, 40, 10);
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("Reiniciar", width - 85, height - 40);
    }
  }

  mostrarInicio() {
    image(imgInicio, 0, 0, width, height);
    this.mostrarBoton(width / 2 - 75, height / 2 - 40, 150, 50, "Comenzar");
    this.mostrarBoton(width / 2 - 75, height / 2 + 20, 150, 50, "Créditos");
    this.mostrarBoton(width / 2 - 75, height / 2 + 80, 150, 50, "Instrucciones");
  }

  mostrarCreditos() {
    image(imgCreditos, 0, 0, width, height);
    this.mostrarBoton(width - 150, height - 60, 130, 40, "Volver");
  }

  mostrarInstrucciones() {
    image(imgInstrucciones, 0, 0, width, height);
    this.mostrarBoton(width - 150, height - 60, 130, 40, "Siguiente");
  }

  mostrarBoton(x, y, ancho, alto, texto) {
    fill(9, 77, 13);
    rect(x, y, ancho, alto, 10);
    fill(255);
    textSize(25);
    textAlign(CENTER, CENTER);
    text(texto, x + ancho / 2, y + alto / 2);
  }

  mostrarBotonReiniciar(texto) {
    this.mostrarBoton(width - 150, height - 60, 130, 40, texto);
  }

  mostrarBotonMusica(){
    fill(255);
    circle(610, 30, 30);
  }
  
}
