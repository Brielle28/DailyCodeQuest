// question
// Write a function createCounter. It should accept an initial integer init.
//  It should return an object with three functions.

// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
//note decrease and increase should be working on te same or would i say current value then they update the nature of the current value but reset should go back to the inital out 

function createCounter (int) {
    let initial = int //assign the current num to a variable
    return {
        reset (){
            initial = int  //re assign or brings it back to the num being passed in
            return initial;
        },
        increment (){
            initial += 1 //working or updating the current value by increasing by one
            return initial
        },
        
        decrement () { 
            initial -= 1 //working or updating the current value by decreasing by one
            return initial
        },
    }
}