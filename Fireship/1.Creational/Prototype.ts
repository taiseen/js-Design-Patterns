// 20 - May - 2023

// Prototype pattern which is just a fancy word for clone...
// familiar with inheritance in OOP

// inheritance where a class can be extended with a subclass 
// one problem with inheritance is that 
// it can lead to a complex hierarchy of code


class Animal { }

class Cat extends Animal { }
class Dog extends Animal { }


// the Prototype Pattern is an alternative way to implement inheritance 
// but instead of inheriting functionality from a class 
// it comes from an object that's already been created 
// this creates a flat prototype chain 
// that makes it much easier to share functionality between objects

// classes in javascript prototype refers to its constructor...


// javascript will go up the prototype chain until it reaches the root 
// looking for any methods or properties on the parent objects...

const human = {
    getSleep() {
        return 'zZz... 🧠'
    }
}

const boy = Object.create(human, { name: { value: 'Jon' } });

console.log(boy.getSleep());



// Array.prototype.myFun = function () {   // don't do this...
//     console.log('🔴 Prototype...');
// }

// const numArr = [1, 2, 3];
// numArr.myFun();                         // don't do this...
