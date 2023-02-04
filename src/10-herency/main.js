// import { Course } from './courses.mjs';
const { Course } = require('./courses.js');
const { FreeStudent, TeacherStudent } = require('./students.js');
// Courses
const cursoProgBasica = new Course({
  name: 'Curso gratis de programación básica',
  isFree: true,
});

const cursoHTML = new Course({
  name: 'Curso practico de HTML y CSS',
  lang: 'english',
  isFree: false
});

// Students
const chris = new FreeStudent({
  name: 'Christian',
  username: 'chriscodex',
  email: 'c.espinoza.code@gmail.com',
  twitter: 'chriscodex',
});

const xodia = new TeacherStudent({
  name: 'Xodia',
  username: 'xodiastone',
  email: 'xodia.forbidden.one@gmail.com',
  twitter: 'xodiastone',
});

chris.approveCourse(cursoHTML)

chris.publicarComentario('meh')

xodia.publicarComentario('en algo')

console.log('xd');
