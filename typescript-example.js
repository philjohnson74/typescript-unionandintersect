/*
//js example... run with js extension
function logColour(colour) {
    console.log(colour);
    console.log(colour.length)
}

logColour("red")
logColour(null)
*/
//Can still extend
//type ExtendedColourUnion = ColourUnion | "purple" | "green"
function logColour(colour) {
    console.log(colour);
}
logColour("red");
var mallard = {
    walk: "waddle",
    talk: "quack",
    swim: "paddle"
};
function logDuck(duck) {
    console.log(duck.walk);
    console.log(duck.talk);
    console.log(duck.swim);
}
logDuck(mallard);
var ape = {
    walk: "on all fours",
    talk: "gibberish",
    swing: "through the trees"
};
//  Show we can't pass an ape to a duck (then change swim to be optional and explain structural typing. Leave as otional for rest of session)
logDuck(ape);
/*
function logAnimal(animal: Animal)
{
    console.log(animal.walk);
    console.log(animal.talk);
}
*/
logAnimal(mallard);
logAnimal(ape);
//  Show you can't use swim in the logAnimal above then show the use of the typeguard
//  Explain type widening and type narrowing
//  Breaks Liskov's substitution principle
function isTypeDuck(value) {
    return value.hasOwnProperty('swim');
}
function logAnimal(animal) {
    console.log(animal.walk);
    console.log(animal.talk);
    if (isTypeDuck(animal)) {
        console.log(animal.swim);
    }
}
function logSuperAnimal(animal) {
    console.log(animal.walk);
    console.log(animal.talk);
    console.log(animal.swim);
    console.log(animal.swing);
}
var superAnimal = {
    walk: "on all fours",
    talk: "gibberish",
    swing: "through the trees",
    swim: "Butterfly"
};
logSuperAnimal(superAnimal);
