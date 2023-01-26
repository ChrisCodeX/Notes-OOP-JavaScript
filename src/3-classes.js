(() => {
  // LearningPath Class
  class LearningPath {
    constructor({ name, courses }) {
      this.name = name;
      this.courses = courses;
    }
  }

  // Instance
  const webDevelopment = new LearningPath({
    name: "Web Development",
    courses: ["Curso 1", "Curso 2"],
  });

  // Student Class
  class Student {
    constructor({ name, age }) {
      this.name = name;
      this.age = age;
      this.learningPath = [];
      this.cursosAprobados = [];
    }

    addNewCurse(newCurse) {
      this.cursosAprobados.push(newCurse);
    }

    addLearningPath(newLearningPath) {
      this.learningPath.push(newLearningPath);
    }
  }

  // Create an objet from class

  const chris = new Student({
    name: "Christian",
    age: 25,
  });

  chris.addLearningPath(webDevelopment.name)
  console.log("🟡 ~ file: 3-classes.js:17 ~ mike", chris);
})();
