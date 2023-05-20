// 20 - May - 2023

// it's a type of object 
// that can only be instantiated once


class Settings {

    static instance: Settings;
    public readonly mode = 'dark';


    // constructor private so that...
    // it cannot be instantiated with a new keyword
    private constructor() { }



    // gitInstance method that will check to see
    // if the instance has already been created return that instance
    // and if not it will create a new one &
    // that ensures that only one object can be created...
    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }

        return Settings.instance;
    }
}