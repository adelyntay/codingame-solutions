/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
        
    directionX = "";
    directionY = "";

    if (initialTx > lightX) {
        initialTx -= 1;
        directionX = "W";
    } else if (initialTx < lightX) {
        initialTx += 1;
        directionX = "E"
    }

    if (initialTy > lightY) {
        initialTy -= 1;
        directionY = "N";
    } else if (initialTy < lightY) {
        initialTy += 1;
        directionY = "S"
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    final_direction = directionY + directionX
    console.log(final_direction);
}