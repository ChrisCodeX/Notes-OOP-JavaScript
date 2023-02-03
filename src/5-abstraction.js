/* eslint-disable */
(() => {
  class Class {
    constructor({
      name,
      comments = []
    }) {
      this.name = name,
      this.comments = comments
    }
  }
  const clase1 = new Class({name: 'Clase 1'})
  const clase2 = new Class({name: 'Clase 2'})

  class Course {
    constructor({
      name, 
      classes = []
    }) {
      this.name = name
      this.classes = classes
    }
  }

  const course1 = new Course({
    name: 'Programación Básica',
    classes: [clase1, clase2]
  })

  const course2 = new Course({
    name: 'Curso de HTML y CSS',
    classes: [clase1, clase2]
  })

  class LearningPath {
    constructor({ 
      name, 
      courses = []
    }) {
      (this.name = name), (this.courses = courses);
    }
  }

  const escuelaWeb = new LearningPath({ name: "Escuela web", courses: [course1, course2] });

  console.log(escuelaWeb);
})();
