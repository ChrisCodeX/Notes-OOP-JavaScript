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
}