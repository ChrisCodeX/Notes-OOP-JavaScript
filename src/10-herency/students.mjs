// Student class
export class Student {
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
}

// FreeStudent Class
export class FreeStudent extends Student {
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
