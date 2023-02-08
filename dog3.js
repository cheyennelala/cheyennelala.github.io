function Dog(name, breed, owner, traits, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.owner = owner;
  this.traits = traits;
  this.mySound = mySound;
  this.canTalk = canTalk;
  this.myGreeting = function() {
    let dogInfo = document.getElementById("dogInfo");
    let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
    dogInfo.innerHTML = `Meet ${this.name}, a ${this.breed} who is owned by ${this.owner}. ${this.name} is known for being ${this.traits[0]}, ${this.traits[1]}, and ${this.traits[2]}. ${talkMessage} ${this.name} says "${this.mySound}"`;
  };
}

let myDogConst = new Dog("scooby-Doo", "Great Dane", "Mystery Inc.", ["Brave", "Hungry", "Friendly"], "Ruh-roh, Raggy!", false);
let dog1 = new Dog("snoopy", "Beagle", "Charlie Brown", ["Loyal", "Friendly", "Imaginative"], "Woof!", false);
let dog2 = new Dog("santas little helper", "Greyhound", "The Simpsons", ["Loyal", "Friendly", "Fun-loving"], "Grr!", false);

let allDogs = [myDogConst, dog1, dog2];

for (let dog in allDogs) {
console.log(`Name: ${allDogs[dog].name}`);
console.log(`Breed: ${allDogs[dog].breed}`);
console.log(`Owner: ${allDogs[dog].owner}`);
console.log(`Traits: ${allDogs[dog].traits.join(', ')}`);
console.log(`Sound: ${allDogs[dog].mySound}`);
console.log(`Can talk: ${allDogs[dog].canTalk}`);
console.log("\n");
}

let selectedDog = prompt("scooby doo, snoopy, santas little helper. Pick one from these options");
let selectedDogExists = false;

for (let i = 0; i < allDogs.length; i++) {
if (allDogs[i].name.toLowerCase() === selectedDog.toLowerCase()) {
selectedDogExists = true;
allDogs[i].myGreeting();
break;
}
}

if (!selectedDogExists) {
console.error(`The object "${selectedDog}" does not exist.`);
}