// 1 - Jun - 2023

/*
Interface Segregation Principle - ISP 

focuses on designing interfaces that are specific to their client's needs. 
It states that no client should be forced to depend on methods() it does not use.

The principle suggests that 
instead of creating a large interface that covers all the possible methods(), 
it's better to create smaller, more focused interfaces for specific use cases. 
*/

/*
// interface Vehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     drive(): void;
//     fly(): void;
// }


// class Car implements Vehicle {

//     startEngine() {
//         // implementation
//     }

//     stopEngine() {
//         // implementation
//     }

//     drive() {
//         // implementation
//     }

//     fly() {
//         throw new Error("This vehicle cannot fly.");
//     }
// }


// const car = new Car();
// car.fly()
*/



interface Drivable {
    startEngine(): void;
    stopEngine(): void;
    drive(): void;
}


interface Flyable {
    fly(): void;
}




class Car implements Drivable {

    startEngine() {
        console.log('engine - start 🟢');
    }

    stopEngine() {
        console.log('engine - stop 🔴');
    }

    drive() {
        console.log('drive - 🚦');
    }
}

const car = new Car();
car.startEngine();
car.drive();
car.stopEngine();




class Airplane implements Drivable, Flyable {

    startEngine() {
        console.log('engine - start 🟢');
    }

    stopEngine() {
        console.log('engine - stop 🔴');
    }

    drive() {
        console.log('drive - 🚦');
    }

    fly(): void {
        console.log('fly - ✈️');
    }
}

const plane = new Airplane();
plane.startEngine();
plane.drive();
plane.fly();
plane.stopEngine();