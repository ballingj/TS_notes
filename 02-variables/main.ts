// var keyword create variable outside the scope

// function doSomething() {
//     for (var i=0; i< 5; i++) {
//         console.log(i)
//     }

//     console.log('Finally: ' + i)  //this should not be done
// }

// let and const keyword is the way to go
function doSomething() {
    for (let i=0; i< 5; i++) {
        console.log(i)
    }

    console.log('Finally: ' + i)  //<= i is out of scope 
}

doSomething()
