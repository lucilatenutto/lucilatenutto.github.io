class Laser {
  constructor(dipper_x) {
    this.x = dipper_x;
    this.y = 0;
    this.diam = 10;
    this.velocidad = 20;
  }

  mostrar() {
    fill(255, 3, 11);
    rect(this.x, this.y, this.diam, this.diam * 3);
    this.y += this.velocidad;
  }
}
