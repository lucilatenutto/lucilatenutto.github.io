class Dipper {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.diam = 35;
    this.velocidad = 10;
    this.imagen = imgDipper;
  }
  
  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad; 
    }
       if (this.x < this.diam / 2) {
      this.x = this.diam / 2; 
    }
    if (this.x > width - this.diam / 2) {
      this.x = width - this.diam / 2;
    }
  }
  
  tocaCirculo(obj) {
    let distancia = dist(this.x, this.y, obj.x, obj.y);

    let sumaDeRadios = ((this.diam / 2) + (obj.diam / 2));
    return distancia < sumaDeRadios;  
  }
  
  tocaRectangulo(rect) {
    let radioCirculo = this.diam / 2;
    let ladoCuadrado = rect.diam;
    let puntoCercanoX = this.x;
    if (puntoCercanoX < rect.x) {
      puntoCercanoX = rect.x;
    } else if (puntoCercanoX > rect.x + ladoCuadrado) {
      puntoCercanoX = rect.x + ladoCuadrado;
    }

    let puntoCercanoY = this.y;
    if (puntoCercanoY < rect.y) {
      puntoCercanoY = rect.y;
    } else if (puntoCercanoY > rect.y + ladoCuadrado) {
      puntoCercanoY = rect.y + ladoCuadrado;
    }
  
    let distancia = dist(this.x, this.y, puntoCercanoX, puntoCercanoY);
  
    return distancia < radioCirculo;
  }

  mostrar() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.diam);
    image(this.imagen, this.x, this.y, this.diam, this.diam); 
  }
}
