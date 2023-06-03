/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temps to analyse
let temp = []; 

if (n === 0) {
    console.log("0") // return zero if no temps are provided
} else {
    var inputs = readline().split(' '); // split to an array
    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]); // a temp expressed as an integer ranging from -273 to 5526
        temp.push(t);
        }
}

const closeToZero = temp.reduce((closest, current) => {
    if (Math.abs(current) < Math.abs(closest) 
    || (Math.abs(current) === Math.abs(closest) && current > closest)) { // if temp are same, check the positive and negative value
        return current;
    }
    return closest;
});

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(closeToZero);