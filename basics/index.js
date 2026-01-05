

//A callback function is a function that is passed as an argument to another function and executed later 

// function greet(name , callback){
//     console.log("hellow" + name);
//     callback();

// }

// function sayBye(){
//     console.log(" bye");

// }

// greet("Vaish" , sayBye);



//output : Hellow Vaish
           //bye       (sayBye is passed as a callback to greet() which executes after greeting)




//Async CallBack
// In asynchronous scenarios, the callback execution is delayed until a task finishes. This is commonly seen with timers, event listeners, and data requests: 

// console.log("start");

// setTimeout(function callback(){
//     console.log("this runs after 2 sec");

// }, 2000);

// setTimeout(()=>{
//     console.log("okay")
// }, 4000);

// console.log("end");


// Output (order of appearance in console):
// Start
// End
// This runs after 2 seconds


// function calc(a , b , callback){
//     return callback(a , b);

// }

// function add(x , y){
//     return x+ y ;
// }

// console.log(calc(3 , 4 , add))




// function addSquare(a , b){
//     return a*a + b*b;
// }

// function doSom(x , y , addSquare){
//     return addSquare(x , y);
// }

// console.log(doSom(3 , 4, addSquare))



// const result=  doSom(3 , 4, (a , b)=> a * a + b * b);

// console.log(result);


// .map() run a callback function on every element of an array and gives you a nwew array with the results



const numbers = [1 , 2 , 3 , 4 , 5 ,6 ];

// const newArr = numbers.map(n => n* n )
// console.log(newArr)


// numbers.map((value, index) => {
//   console.log(value, index);
//   return value * 2 ;
// });



//Asynchronous callback (real-world JS)

// setTimeout(()=>{
//     console.log("this runs after 2 seconds");
// }, 2000)



// function test(cb){
//     cb(10);
// }

// test(n=>console.log(n * 2))

// function new2( a , square){
//     return square(a);
// ;

// }

// function square(n){
//     return n*n;
// }

// console.log(new2( 5 , square));




function check(a , evenCB , oddCb){
    if(a % 2==0){
       evenCB();
    }
    else { oddCb();

    }
}

// function evenCb(){
//     console.log("even number")
// }

// function oddCb(){
//     console.log("odd number")
// }

// ( check(5 , evenCb , oddCb))



// check(
//     5 , ()=>console.log("even"),
//     () =>console.log("odd")
// )





// function checker(a , b){
//     return a * b ;

// }

// function format(x , y , format){
//     format();
//     return x , y;
// }

// console.log(checker(2 , 4 , format ))






