// 29 - May - 2023

// Single Responsibility Principle - SRP

export class Marker {
    constructor(
        public name: string,
        public color: string,
        public price: number
    ) { }
}

// #######################################################
// #######################################################
// #######################################################

/* 
// class Invoice {

//     constructor(private marker: Marker, private quantity: number) { }

//     calculateTotal(): number {
//         return this.marker.price * this.quantity;
//     }

//     printInvoice(): void {
//         // printing implementation
//     }

//     saveToDb(): void {
//         // save to database implementation
//     }
// }
*/

// #######################################################
// #######################################################
// #######################################################


/*
In this refactored, 
we have split the responsibilities of the Invoice class into 3 separate classes: 
Invoice, InvoiceDao, and InvoicePrinter.

The Invoice class is responsible only for calculating the total amount, 
and the printing and saving responsibilities have been delegated to separate classes. 
This makes the code more modular, easier to understand, and less prone to errors.
*/

export class Invoice {

    constructor(public marker: Marker, public quantity: number) { }

    calculateTotal(): number {
        const total = this.marker.price * this.quantity;
        console.log(total);
        return total;
    }
}

// #######################################################
// #######################################################
// #######################################################

class InvoiceSave {

    constructor(invoice: Invoice) { }

    saveToDb(): void {
        console.log('save to database...');
    }
}

// #######################################################
// #######################################################
// #######################################################

class InvoicePrinter {

    constructor(public invoice: Invoice) { }

    printInvoice(): void {
        // console.log(invoice);
        console.log(`
            Marker Info:-
            Name: ${this.invoice.marker.name}   
            Color: ${this.invoice.marker.color}   
            Price: ${this.invoice.marker.price}   
            Quantity: ${this.invoice.quantity}

            Total Price: ${this.invoice.calculateTotal()}
        `);
    }
}

// #######################################################
// #######################################################
// #######################################################

// const pen = new Marker('BollPen', 'Black', 30);


// const invoice = new Invoice(pen, 2);
// invoice.calculateTotal();


// const invoicePrint = new InvoicePrinter(invoice);
// invoicePrint.printInvoice();


// const invoiceSave = new InvoiceSave(invoice);
// invoiceSave.saveToDb();