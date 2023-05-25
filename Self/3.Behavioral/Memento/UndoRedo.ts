// 25 - May - 2023

// Undo Redo --> Working Behavior

class Editor {

    private content: string;
    private undoHistory: string[];
    private redoHistory: string[];

    constructor() {
        this.content = '';
        this.undoHistory = [];
        this.redoHistory = [];
    }

    public type(text: string): void {
        this.content += text;
        this.undoHistory.push(this.content);
        this.redoHistory = [];
    }

    public undo(): void {
        if (this.undoHistory.length > 0) {
            const previousState = this.undoHistory.pop();
            this.content = previousState!;

            this.redoHistory.push(this.content);
        }
    }

    public redo(): void {
        if (this.redoHistory.length > 0) {
            const nextState = this.redoHistory.pop();
            this.content = nextState!;

            this.undoHistory.push(this.content);
        }
    }

    public getContent(): string {
        return this.content;
    }
}

// Usage
const editor = new Editor();

editor.type('Hello, ');
console.log(editor.getContent()); // Output: Hello,

editor.type('world!');
console.log(editor.getContent()); // Output: Hello, world!

editor.undo();
console.log(editor.getContent()); // Output: Hello,

editor.redo();
console.log(editor.getContent()); // Output: Hello, world!

editor.type(' taiseen');
console.log(editor.getContent());
editor.type(' azam');
console.log(editor.getContent());


editor.undo();
console.log(editor.getContent());
editor.undo();
console.log(editor.getContent());
editor.undo();
console.log(editor.getContent());
editor.undo();
console.log(editor.getContent());


editor.redo();
console.log(editor.getContent());
editor.redo();
console.log(editor.getContent());
editor.redo();
console.log(editor.getContent());
editor.redo();
console.log(editor.getContent());
