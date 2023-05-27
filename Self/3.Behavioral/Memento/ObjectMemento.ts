// 26 - May - 2023

// Undo Redo --> Working Behavior by Memento Pattern


// // Interface for the object input
// interface ObjectInput {
//     value: string;
// }


// // Memento
// class ObjMemento {

//     private state: ObjectInput[];

//     constructor(state: ObjectInput[]) {
//         this.state = state;
//     }

//     public getState(): ObjectInput[] {
//         return this.state;
//     }
// }


// // Originator
// class ObjectEditor {

//     private objContent: ObjectInput[];
//     private undoHistory: ObjMemento[];
//     private redoHistory: ObjMemento[];

//     constructor() {
//         this.objContent = [];
//         this.undoHistory = [];
//         this.redoHistory = [];
//     }

//     public addObject(object: ObjectInput): void {
//         const objMemento = new ObjMemento([...this.objContent]);
//         this.undoHistory.push(objMemento);
//         this.objContent.push(object);
//         this.redoHistory = [];
//     }

//     public undo(): void {
//         if (this.undoHistory.length > 0) {
//             const previousState = this.undoHistory.pop();
//             if (previousState) {
//                 this.redoHistory.push(new ObjMemento([...this.objContent]));
//                 this.objContent = previousState.getState();
//             }
//         }
//     }

//     public redo(): void {
//         if (this.redoHistory.length > 0) {
//             const nextState = this.redoHistory.pop();
//             if (nextState) {
//                 this.undoHistory.push(new ObjMemento([...this.objContent]));
//                 this.objContent = nextState.getState();
//             }
//         }
//     }

//     public getContent(): ObjectInput[] {
//         return this.objContent;
//     }
// }


// const objEditor = new ObjectEditor();

// objEditor.addObject({ value: 'Hello' });
// console.log(objEditor.getContent());


// objEditor.addObject({ value: 'world' });
// console.log(objEditor.getContent());

// objEditor.undo();
// console.log(objEditor.getContent());

// objEditor.redo();
// console.log(objEditor.getContent());


// objEditor.addObject({ value: 'taiseen' });
// console.log(objEditor.getContent());

// objEditor.addObject({ value: 'azam' });
// console.log(objEditor.getContent());


// objEditor.undo();
// console.log(objEditor.getContent());
// objEditor.undo();
// console.log(objEditor.getContent());
// objEditor.undo();
// console.log(objEditor.getContent());
// objEditor.undo();
// console.log(objEditor.getContent());
// objEditor.undo();
// console.log(objEditor.getContent());


// objEditor.redo();
// console.log(objEditor.getContent());
// objEditor.redo();
// console.log(objEditor.getContent());
// objEditor.redo();
// console.log(objEditor.getContent());
// objEditor.redo();
// console.log(objEditor.getContent());


// Originator
class ObjectEditor {
    private objContent: ObjectInput[];

    constructor() {
        this.objContent = [];
    }

    addObject(object: ObjectInput): void {
        this.objContent.push(object);
    }

    getContent(): ObjectInput[] {
        return this.objContent;
    }

    createMemento(): ObjectEditorMemento {
        return new ObjectEditorMemento([...this.objContent]);
    }

    restoreMemento(memento: ObjectEditorMemento): void {
        this.objContent = memento.getState();
    }
}

// Memento
class ObjectEditorMemento {
    private state: ObjectInput[];

    constructor(state: ObjectInput[]) {
        this.state = state;
    }

    getState(): ObjectInput[] {
        return this.state;
    }
}

// Caretaker
class ObjectEditorHistory {
    private undoHistory: ObjectEditorMemento[];
    private redoHistory: ObjectEditorMemento[];

    constructor() {
        this.undoHistory = [];
        this.redoHistory = [];
    }

    pushUndo(memento: ObjectEditorMemento): void {
        this.undoHistory.push(memento);
    }

    pushRedo(memento: ObjectEditorMemento): void {
        this.redoHistory.push(memento);
    }

    popUndo(): ObjectEditorMemento | undefined {
        return this.undoHistory.pop();
    }

    popRedo(): ObjectEditorMemento | undefined {
        return this.redoHistory.pop();
    }
}

// Interface for the object input
interface ObjectInput {
    value: string;
}

// Usage
const objectEditor = new ObjectEditor();
const objectEditorHistory = new ObjectEditorHistory();

objectEditor.addObject({ value: 'Object 1' });
objectEditor.addObject({ value: 'Object 2' });
const currentStates = objectEditor.createMemento();
objectEditorHistory.pushUndo(currentStates);

objectEditor.addObject({ value: 'Object 3' });
objectEditor.addObject({ value: 'Object 4' });

// const undoState = objectEditorHistory.popUndo();
// if (undoState) {
//     objectEditor.restoreMemento(undoState);
//     objectEditorHistory.pushRedo(currentStates);
// }

// const redoState = objectEditorHistory.popRedo();
// if (redoState) {
//     objectEditor.restoreMemento(redoState);
// }
console.log(objectEditor.getContent());
