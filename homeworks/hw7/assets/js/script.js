function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
    return Math.random() * max;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

// Calculate the average of x, y, and z
let avg = averageThreeNumbers(x, y, z);

// Create a sentence describing the average with your favorite animal
let sentence = createSentence(avg, "bunnies"); 

// Output the result
console.log(sentence);