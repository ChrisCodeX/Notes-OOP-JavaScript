// Prototype
function Student() {
  this.name = "Name";
  this.age = 25;
  this.points = 1000;
}

const christian = new Student();
console.log("🟡 -------------------------------------------🟡");
console.log("🟡 ~ file: index.js:8 ~ prototype", christian);
console.log("🟡 -------------------------------------------🟡");

// Literal Object

const nat = {
  name: "Natalia",
  age: 28,
  points: 2000,
};

console.log('🟡 --------------------------------🟡')
console.log('🟡 ~ file: index.js:23 ~ literal object', nat)
console.log('🟡 --------------------------------🟡')

const prototypeInstance = new Array
console.log('🟡 ------------------------------🟡')
console.log('🟡 ~ file: index.js:26 ~ prototypeInstance', prototypeInstance)
console.log('🟡 ------------------------------🟡')
