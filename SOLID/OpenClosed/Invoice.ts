// 30 - May - 2023

import { Invoice, Marker } from "../SingleResponsibility/Marker";

// Open-Closed Principle - OCP

/* 
Software entities (classes, modules, functions, and so on) should be 
Open for extension but Closed for modification.
This means that the behavior of a software entity can be extended 
without modifying its source code.
*/


/* 
// class InvoiceDao {

//     constructor(private invoice: Invoice) { }

//     public saveToDb(): void {
//         // save to database implementation
//     }

//     public saveToFile(): void {
//         // save to database implementation
//     }
// }
*/


interface InvoiceStore {
    save(invoice: Invoice): void;
}

// #######################################################
// #######################################################
// #######################################################

class InvoiceDB implements InvoiceStore {

    save(invoice: Invoice): void {
        console.log('Save invoice into db...', invoice);
    }
}

// #######################################################
// #######################################################
// #######################################################

class InvoiceFile implements InvoiceStore {

    save(invoice: Invoice): void {
        console.log('Save invoice into file...', invoice);
    }
}

// #######################################################
// #######################################################
// #######################################################

const brush = new Marker('ColorBruch', 'White', 60);

const invoice = new Invoice(brush, 3);

const iDB = new InvoiceDB();
iDB.save(invoice)

const iFL = new InvoiceFile();
iFL.save(invoice)