// Literal object
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: ["Curso 1", "Curso 2"],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
  }
};
console.log('🟡 ~ file: 2-literal-object-prototypes.js:10 ~ natalia', natalia)

// Instrucción: Agregar un curso a cursosAprobados
natalia.cursosAprobados.push('Curso 3');

