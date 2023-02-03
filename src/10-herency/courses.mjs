export class Course {
  constructor({ 
    name, 
    classes = [],
    isFree = false,
    lang = 'spanish'
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito != "string") {
      console.error("solo string");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}