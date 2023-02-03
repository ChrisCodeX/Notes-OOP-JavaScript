/* eslint-disable */
(() => {
  class Student {
    constructor({ name, lastName, age }) {
      this.name = name;
      // Oculto convencionalmente
      this._lastName = lastName;
      // Oculto realmente
      const _age = Symbol("age");
      this[_age] = age;
    }

    get lastName() {
      return this._lastName;
    }

    set age(newAge) {
      if (newAge < 18) {
        console.error("It needs to be an adult");
      } else {
        this[_age] = newAge;
      }
    }

    set lastName(newLastName) {
      if (newLastName === 'Doe'){
        console.error('Cant create this student')
      } else {
        this._lastName = newLastName;
      }
    }
  }

  const chris = new Student({
    name: "Christian",
    lastName: "Espinoza",
    age: 19,
  });
  chris.lastName = 'Doe'
  console.log(chris.lastName);
})();
