/* eslint-disable */
export class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    // Tu código aquí 👈
    return this._name;
  }

  set name(nuevoNombrecito) {
    // Tu código aquí 👈
    if (typeof nuevoNombrecito != "string") {
      console.error("solo string");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

const nomb = new Course({
  name: "curso progra basic",
});

console.log(nomb.name);
