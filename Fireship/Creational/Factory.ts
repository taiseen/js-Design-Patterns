// 20 - May - 2023

// instead of using the new keyword to instantiate or create an object 
// you use a function() or method() to do it for you...
// so function() or method() creates a new instance / object for you...

class IOSButton { }

class AndroidButton { }

// without Factory...
const os = 'android';

// doing a bunch of conditional checking to determine which button to show...
// it's not very maintainable...
const btn1 = os === 'android' ? new AndroidButton() : new IOSButton();
const btn2 = os === 'android' ? new AndroidButton() : new IOSButton();
const btnN = os === 'android' ? new AndroidButton() : new IOSButton();


// we can create a subclass or function 
// that will determine which object to instantiate
// now instead of repeating the same logic
// we use the factory to determine which button should be rendered 

// with Factory...
class BtnFactory {
    createBtn(os: string): AndroidButton | IOSButton {
        return os === 'android'
            ? new AndroidButton()
            : new IOSButton() 
    }
}

const factory = new BtnFactory();
const btn11 = factory.createBtn(os);
const btn12 = factory.createBtn(os);
const btn13 = factory.createBtn(os);