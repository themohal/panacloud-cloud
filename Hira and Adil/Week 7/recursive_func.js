// function recursive(x) {
//     console.log(x)
//     recursive(--x) //decrement 
//     console.log(x)
// }
// recursive(1)

function recursive(x) {

    if (x > 0) {
        recursive(--x) //decrement 
        console.log(x)
    }
}
recursive(5)