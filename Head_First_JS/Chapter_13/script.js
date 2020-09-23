function Dog(name, weight, breed) {
  this.species = "Canine";
  this.name = name;
  this.weight = weight;
  this.breed = breed;
  this.bark = function() {
    if (this.weight > 10) {
      console.log("Woof woof");
    } else {
      console.log("yip yip");
    }
  };
}

let fido = new Dog("fido", 8, "mixed");
let spoofy = new Dog("Spoofy", 8, "chihuahua");
spoofy.bark = function bark() {
  console.log("woof woof by spoofy");
};

console.log(fido);
console.log(spoofy);

fido.bark();
spoofy.bark();
