// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.

for (let y = 100; y >= 0; y -= 1) {
    if (y % 2 === 0){
        console.log(y);
    }
}
