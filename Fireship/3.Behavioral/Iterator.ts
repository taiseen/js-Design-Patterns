// 20 - May - 2023

// Iterator Pattern ==>
// allows you to traverse through a collection of objects
// it's a pull based system

// modern languages already provide abstractions for the iterator pattern 
// like the for loop when you loop over an array of items 
// you're using the iterator pattern

const letter = ['a', 'b', 'c', 'd', 'e'];

for (const item of letter) {
    console.log(item)
}



// built a range function that
// easily iterate 10 times at a certain interval
//

// we can actually do that easily
// by implementing our own iterator pattern in JS

function range(start: number, end: number, step = 1) {

    return { // return an {object} that has a next() method

        [Symbol.iterator]() {
            return this;
        },

        next() { // needs to return an {object} that has a value property

            if (start < end) {

                start = start + step;

                return { done: false, value: start }
            }

            return { done: true, value: end }
        }
    }
}


for (const n of range(0, 20, 5)) {
    console.log(n);
}