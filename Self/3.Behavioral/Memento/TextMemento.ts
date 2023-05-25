// 25 - May - 2023

// Undo Redo --> Working Behavior by Memento Pattern

class TextEditor {

    private content: string;
    private undoHistory: Memento[];
    private redoHistory: Memento[];

    constructor() {
        this.content = '';
        this.undoHistory = [];
        this.redoHistory = [];
    }

    public type(text: string): void {
        const memento = new Memento(this.content);
        this.undoHistory.push(memento);
        this.content += text;
        this.redoHistory = [];
    }

    public undo(): void {
        if (this.undoHistory.length > 0) {
            const previousState = this.undoHistory.pop();
            if (previousState) {
                this.redoHistory.push(new Memento(this.content));
                this.content = previousState.getState();
            }
        }
    }

    public redo(): void {
        if (this.redoHistory.length > 0) {
            const nextState = this.redoHistory.pop();
            if (nextState) {
                this.undoHistory.push(new Memento(this.content));
                this.content = nextState.getState();
            }
        }
    }

    public getContent(): string {
        return this.content;
    }
}



// Memento
class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}




// Usage
const textEditor = new TextEditor();

textEditor.type('Hello, ');
console.log(textEditor.getContent()); // Output: Hello,

textEditor.type('world!');
console.log(textEditor.getContent()); // Output: Hello, world!

textEditor.undo();
console.log(textEditor.getContent()); // Output: Hello,

textEditor.redo();
console.log(textEditor.getContent()); // Output: Hello, world!


textEditor.type(' taiseen');
console.log(textEditor.getContent());
textEditor.type(' azam');
console.log(textEditor.getContent());


textEditor.undo();
console.log(textEditor.getContent());
textEditor.undo();
console.log(textEditor.getContent());
textEditor.undo();
console.log(textEditor.getContent());
textEditor.undo();
console.log(textEditor.getContent());


textEditor.redo();
console.log(textEditor.getContent());
textEditor.redo();
console.log(textEditor.getContent());
textEditor.redo();
console.log(textEditor.getContent());
textEditor.redo();
console.log(textEditor.getContent());
