// function hello() {
//     console.log("hello");
// }

// async function myData() {
//     setTimeout(() => {
//         console.log("myData Is Calling");
//     }, 2000);
// }

// async function fetchingInfo() {
//     setTimeout(() => {
//         console.log("Your Info Is calling");
//     }, 4000);
// }


// myData();
// hello();
// hello();
// hello();
// fetchingInfo();

function middleWareFunction(number) {
    return number % 2 == 0;
}

function myFunction1(number1) {
    const isEven = middleWareFunction(number1);
    if (isEven) {
        console.log("function 1 number is even");
    }
}
function myFunction2(number1) {
    const isEven = middleWareFunction(number1);
    if (isEven) {
        console.log("function 2 number is even");
    }
}
function myFunction3(number1) {
    const isEven = middleWareFunction(number1);
    if (isEven) {
        console.log("function 3 number is even");
    }
}


myFunction1(10)
myFunction2(20)
myFunction3(30)
