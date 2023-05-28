// 28 - May - 2023


interface PaymentStrategy {
    pay(amount: number): void;
}


class CreditCardPayment implements PaymentStrategy {

    constructor(
        private cardNumber: string,
        private expirationDate: string,
        private cvv: string
    ) { }

    pay(amount: number): void {
        console.log(`Paying $${amount} with credit card ${this.cardNumber}`);
        // Logic to process payment with credit card goes here
    }
}


class PayPalPayment implements PaymentStrategy {

    constructor(private email: string, private password: string) { }

    pay(amount: number): void {
        console.log(`Paying $${amount} with PayPal account ${this.email}`);
        // Logic to process payment with PayPal goes here
    }
}


class Payment {

    paymentProcess(amount: number, payMethod: string): void {

        let paymentStrategy: PaymentStrategy;

        switch (payMethod) {

            case 'creditCard':
                paymentStrategy = new CreditCardPayment('123456789', '12/24', '123');
                break;

            case 'paypal':
                paymentStrategy = new PayPalPayment('example@example.com', 'password');
                break;

            default:
                console.log('Invalid payment method');
                return;
        }

        paymentStrategy.pay(amount);
    }
}


const paymentOptions: string[] = ['creditCard', 'paypal'];


const pay = new Payment();


// pay.paymentProcess(100, paymentOptions[0]); // Pay with credit card
pay.paymentProcess(200, paymentOptions[1]); // Pay with PayPal