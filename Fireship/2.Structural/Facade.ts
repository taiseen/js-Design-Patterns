// 20 - May - 2023

// Facade ==> is basically just a simplified api to hide other low-level details 

class PlumbingSystem {

    // low level access to the plumbing system...
    setPressure(unit: number) { }
    turnOff() { }
    turnOn() { }

}


class ElectricSystem {

    // low level access to the electric system...
    setVoltage(unit: number) { }
    turnOff() { }
    turnOn() { }

}


// people living in the house...
// don't need access to these low-level details 
// so we create a Facade class...

class Home {

    private plumbing = new PlumbingSystem();
    private electric = new ElectricSystem();


    public turnOnSystem() {

        this.electric.turnOn();
        this.electric.setVoltage(120);

        this.plumbing.turnOn();
        this.plumbing.setPressure(500);
    }


    public shutDown() {
        this.electric.turnOff();
        this.plumbing.turnOff();
    }
}


const client = new Home();

client.turnOnSystem();
client.shutDown();



// almost every package that we install with javascript
// could be considered a Facade in some way 