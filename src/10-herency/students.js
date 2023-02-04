const {Comment} = require('./polimorfismo/comments.js');

// Student class
class Student {
  constructor({
    name,
    email,
    username,
    twitter = null,
    instagram = null,
    facebook = null,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.twitter = twitter;
    this.instagram = instagram;
    this.facebook = facebook;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  addNewCurse(newCurse) {
    this.cursosAprobados.push(newCurse);
  }

  addLearningPath(newLearningPath) {
    this.learningPath.push(newLearningPath);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    })

    comment.publicar()
  }
}

// FreeStudent Class
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name}, solo puedes tomar cursos abiertos`
      );
    }
  }
}

// BasicStudent Class
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  aproveCourse(newCourse) {
    if (newCourse.lang === 'english') {
      console.warn(
        `Sorry, ${this.name}, you only can take courses to your language`
      );
      return;
    }
    console.log('hehe xd');
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'profesor'
    })

    comment.publicar()
  }
} 

const bs = new BasicStudent({
  name: 'Christian',
  email: 'asdf@asdf.com',
  username: 'chriscodex',
});

module.exports = {
  Student,
  FreeStudent,
  BasicStudent,
  ExpertStudent,
  TeacherStudent
};
