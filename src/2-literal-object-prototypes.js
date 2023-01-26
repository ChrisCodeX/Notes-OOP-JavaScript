/* Literal object */
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: ["Curso 1", "Curso 2"],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};
console.log("🟡 ~ file: 2-literal-object-prototypes.js:10 ~ natalia", natalia);

// Instrucción: Agregar un curso a cursosAprobados
natalia.cursosAprobados.push("Curso 3");

/* Prototype */
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso)
  // }
}

// Add method to Student prototype outside prototype
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const nat = new Student("Natalia", 20, ["Curso 1", "Curso 2"]);

console.log(
  "🟡 ~ file: 2-literal-object-prototypes.js:17 ~ Student ~ Student",
  nat
);

// nat.aprobarCurso('Curso 3')
// console.log('🟡 ~ file: 2-literal-object-prototypes.js:30 ~ nat', nat)
