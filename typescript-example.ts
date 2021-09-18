/*
//js example... run with js extension
function logColour(colour) {
    console.log(colour);
    console.log(colour.length)
}

logColour("red")
logColour(null)
*/

/* 
//example with ts checking type
logColour("red")
logColour(null)

function logColour(colour: String) {
    console.log(colour);
    console.log(colour.length)
}
*/

/*
//Enum examples
// Show number based enum accepts any number
// Partial declaration with duplicate numbers
// Partial declaration with strings
// Partial declaration with duplicate strings
enum ColourEnum {
    RED = "RED",
    ORANGE = "ORANGE",
    PINK = "PINK"
}

enum ColourEnum {
    BLUE = "RED"
}

function logColour(colour: ColourEnum) {
    console.log(colour);
}

//logColour("red")
logColour(ColourEnum.RED)
logColour(ColourEnum.BLUE)
//logColour(0)
*/

//union of literal types instead of enum
type ColourUnion = "red" | "yellow" | "pink"

//Can still extend
//type ExtendedColourUnion = ColourUnion | "purple" | "green"

function logColour(colour: ColourUnion) {
    console.log(colour);
}

logColour("red")

//  Initially make swim mandatory then add the optional ? further on.
type Duck = {
    walk: string,
    talk: string,
    swim?: string
}

let mallard: Duck = {
    walk: "waddle",
    talk: "quack",
    swim: "paddle"
}

function logDuck(duck: Duck)
{
    console.log("logging duck")
    console.log(duck.walk);
    console.log(duck.talk);
    console.log(duck.swim);
}

logDuck(mallard)

type Ape = {
    walk: string,
    talk: string,
    swing: string
}

let ape: Ape = {
    walk: "on all fours",
    talk: "gibberish",
    swing: "through the trees"
}

//  Show we can't pass an ape to a duck (then change swim to be optional and explain structural typing. Leave as otional for rest of session)
logDuck(ape)

//  Union Type
type Animal = Duck | Ape

/*
function logAnimal(animal: Animal)
{
    console.log(animal.walk);
    console.log(animal.talk);
}
*/

logAnimal(mallard)
logAnimal(ape)

//  Show you can't use swim in the logAnimal above then show the use of the typeguard
//  Explain type widening and type narrowing
//  Breaks Liskov's substitution principle

function isTypeDuck(value: Animal): value is Duck {
    return value.hasOwnProperty('swim');
}

function logAnimal(animal: Animal)
{
    console.log("logging animal union type")
    console.log(animal.walk);
    console.log(animal.talk);
    if(isTypeDuck(animal)) {
        console.log(animal.swim);
    }
}

//  Intersect Type
type SuperAnimal = Duck & Ape

function logSuperAnimal(animal: SuperAnimal)
{
    console.log("logging super animal intersect type")
    console.log(animal.walk);
    console.log(animal.talk);
    console.log(animal.swim);
    console.log(animal.swing);
}

let superAnimal: SuperAnimal = {
    walk: "on all fours",
    talk: "gibberish",
    swing: "through the trees",
    swim: "Butterfly"
}

logSuperAnimal(superAnimal);

//  Show we can't pass Duck in as a superAnimal, but we can pass in ape.
//logSuperAnimal(mallard)
logSuperAnimal(ape)