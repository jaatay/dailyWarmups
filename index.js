'use strict'


//ARRAY WARMUPS

//Test array
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//For loop warmup
const forLoop = array => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

console.log('For loop:');
forLoop(testArray);

//While loop warmup
const whileLoop = array => {
    let whileCounter = 0;
    while(whileCounter < array.length){
    console.log(array[whileCounter]);
    whileCounter++;
    }
}

console.log('While loop:');
whileLoop(testArray);

//.map warmup
const mapMimic = (array, arrayOperation) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray[i] = arrayOperation(array[i]);
        console.log(newArray[i]);
    }
    return newArray;
}

console.log('Map function');
mapMimic(testArray, x => x + 1);

//.filter warmup
const filterMimic = (array, arrayOperation) => {
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        if(arrayOperation(array[i])){
            newArray.push(array[i]);
        }
     
    }

    newArray.forEach(function(element){
        console.log(element);
    });

    return newArray;
}

console.log('Filter function');
filterMimic(testArray, x => x < 5);

//.reduce warmup
const reduceMimic = (array, reducerArrayOperation) => {
    let finalValue = 0;
    for(let i = 0; i < array.length; i++){
        finalValue += reducerArrayOperation(array[i]);
        
    }

    console.log(finalValue);

    return finalValue;
}

console.log('Reduce function')
reduceMimic(testArray, x => x/2);

//OBJECT WARMUPS

//starter code from class repo
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

//new people array
let newPeople = ['Odie', ...people, 'Garfield'];


//new stuff object
const newStuff = {
    tv: stuff.tv,
    radio: stuff.radio,
    toothbrush: stuff.toothbrush,
    cars: [...stuff.cars, 'Geo' ]
} 


//state object
let state = {
    people: people,
    stuff: stuff
}

//new state object
let newState = {
    people: newPeople,
    stuff: newStuff
};

console.log(`Original people: ${people}`);
console.log(`New People: ${newPeople}`);
console.log(stuff);
console.log(newStuff);
console.log(state);
console.log(newState);

