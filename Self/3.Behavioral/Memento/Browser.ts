// 27 - May - 2023


// Memento class to store the state of the browser history
class HistoryMemento {

    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}



// Originator class that creates and restores mementos
class BrowserHistory {

    private state: string;
    private history: HistoryMemento[] = [];
    private currentHistoryIdx: number = -1;


    constructor() {
        this.state = '';
    }


    setState(state: string): void {
        this.state = state;
    }


    getState(): string {
        return this.state;
    }


    // Saves the current state of the browser history
    save(): void {
        const memento = new HistoryMemento(this.state);
        this.history.push(memento);
        this.currentHistoryIdx++;
    }


    // Restores the state of the browser history to the...
    // previous state
    goBack(): void {
        if (this.currentHistoryIdx > 0) {
            this.currentHistoryIdx--;
            this.state = this.history[this.currentHistoryIdx].getState();
        }
        console.log('No previous state available.');
    }


    // Restores the state of the browser history to the...
    // next state
    goForward(): void {
        if (this.currentHistoryIdx < this.history.length - 1) {
            this.currentHistoryIdx++;
            this.state = this.history[this.currentHistoryIdx].getState();
        }
        console.log('No forward state available.');
    }


}





// Usage example
const bH = new BrowserHistory();

bH.setState("Homepage");
bH.save();

bH.setState("About");
bH.save();

bH.setState("Contact");
bH.save();

console.log(bH.getState()); // Output: "Contact"

bH.goBack();
console.log(bH.getState()); // Output: "About"

bH.goBack();
console.log(bH.getState()); // Output: "Homepage"

bH.goForward();
console.log(bH.getState()); // Output: "About"

