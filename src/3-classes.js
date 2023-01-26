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
    }
  }
})();
