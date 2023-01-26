class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    if (integranteNuevo.instrumento === "Batería") {
      let found = false
      this.integrantes.some((integrante) => {
        if (integrante.instrumento === "Batería") {
          found = true
          return true
        }
      });
      if (found) {
        console.log('Solo se puede tener 1 baterista')
      } else {
        this.integrantes.push(integranteNuevo);
        console.log("Integrante agregado");
      }
    } else {
      this.integrantes.push(integranteNuevo);
      console.log("Integrante agregado");
    }
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
};

const banda = new Banda(data);
banda.agregarIntegrante(
  new Integrante({ nombre: "Christian", instrumento: "Guitarra" })
);
banda.agregarIntegrante(
  new Integrante({ nombre: "Leo", instrumento: "Batería" })
);
banda.agregarIntegrante(
  new Integrante({ nombre: "Diego", instrumento: "Batería" })
);
