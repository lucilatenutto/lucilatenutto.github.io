class Bill {
 constructor(dipper) {
    this.objetos = [];
    this.laseres = [];
    this.dipper = dipper;
  }

  lanzarObjetos() {
    if (frameCount % 20 === 0) { 
      this.objetos.push(new Objeto());
    }
  }

  lanzarLaseres() {
    if (frameCount % 30 === 0) {  
      this.laseres.push(new Laser(this.dipper.x));
    }
  }

removerObjeto(objeto) {
  let nuevoArreglo = [];
  for (let i = 0; i < this.objetos.length; i++) {
    if (this.objetos[i] !== objeto) { 
      nuevoArreglo.push(this.objetos[i]);
    }
  }
  this.objetos = nuevoArreglo;
}

removerLaser(laser) {
  let nuevoArreglo = []; 
  for (let i = 0; i < this.laseres.length; i++) {
    if (this.laseres[i] !== laser) { 
      nuevoArreglo.push(this.laseres[i]);
    }
  }
}

  mostrar() {
    for (let obj of this.objetos) obj.mostrar();
    for (let laser of this.laseres) laser.mostrar();
  }
}
