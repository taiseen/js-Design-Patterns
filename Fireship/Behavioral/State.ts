// 20 - May - 2023

// State Pattern ==>
// object behaves differently
// based on a finite number of states...

// in our code we used if/else conditional logic or switch statements
// to handle a bunch of different possibilities
// based on the state or data
// in our app code like this, generally doesn't scale very well


// the goal is to make an object's behavior predictable 
// based on its underlying state

class Human {

    think(mood: string) {

        switch (mood) {

            case 'happy':
                return 'I am happy 😀';

            case 'sad':
                return 'I am sad 🥺';

            default:
                return 'I am neutral 😐';
        }
    }
}

// ################################################################
// ################################################################
// ################################################################

interface State {
    think(): string
}

class HappyState implements State {

    think() {
        return 'I am happy... 😀';
    }
}

class SadState implements State {

    think() {
        return 'I am sad... 🥺';
    }
}

// inside each class we will have an
// identical think() method that behaves differently...


class Humans {
    state: State;

    constructor() {
        this.state = new HappyState();
    }

    think() {
        return this.state.think();
    }

    changeState(state: State) {
        this.state = state;
    }
}

const man = new Humans();
man.think();
man.changeState(man.state);
man.think();

// whenever the state changes 
// the object will behave in a completely different way 
// but at the same time we don't have to change the api or 
// use a bunch of conditional logic 