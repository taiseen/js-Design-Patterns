// 20 - May - 2023

// Normal Approach...

class HotDogN {

    constructor(
        public bread: string,
        public chess: boolean,
        public salad: boolean,
        public ketchup: boolean,
    ) { }

}

// but it's kind of hard to keep track of all these parameter options...
const burger = new HotDogN('wheat', true, true, false);


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// Builder Pattern... 
// we create the object step by step using methods rather than the constructor...
// delegate the object building logic into small methods...

// in JS we'll have each method return "this" 
// which is a reference to the object instance

class HotDog {

    constructor(
        public bread: string,
        public chess?: boolean,
        public salad?: boolean,
        public ketchup?: boolean,
    ) { }

    addChess() {
        this.chess = true;
        return this;
    }

    addSalad() {
        this.salad = true;
        return this;
    }

    addKetchup() {
        this.ketchup = true;
        return this;
    }
}

const myLunch = new HotDog('Demo');

myLunch
    .addChess()
    .addSalad()

console.log(myLunch);


// that allows us to implement method chaining 
// where we instantiate an object by chain methods 
// to it but always get the object as the return value