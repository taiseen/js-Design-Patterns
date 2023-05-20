// 20 - May - 2023

// Mediator Pattern ==> like a middleman or broker...


class AirPlane {

    land() {

    }
}

// #################################################
// #################################################
// #################################################

class Runway {

    constructor(public clear: boolean) {

    }
}

// #################################################
// #################################################
// #################################################

class Tower {

    clearForLanding(runway: Runway, plane: AirPlane) {

        if (runway.clear) {
            console.log(`Plane ${plane} is clear for landing...`);
        }
    }
}

// #################################################
// #################################################
// #################################################

const runWayA = new Runway(true);
const runWayB = new Runway(false);
const runWayC = new Runway(true);

const planeA = new AirPlane();
const planeB = new AirPlane();
const planeC = new AirPlane();

const tower = new Tower();
tower.clearForLanding(runWayA, planeC);


// these {object's} would have to communicate with each other
// & build a many-to-many relationship, that's very dangerous... both in real life & programming
// a solution is to create a mediator like an air traffic controller
// that sits between the runways and the airplanes


// practical example in the express.js web framework 
// there is a middleware system 
// you have incoming requests and outgoing responses 
// middleware sits in the middle by intercepting every request
// & eliminates code duplication...
