

// function greetUser(username , cb){
//     console.log("Hellow" + username);
//     cb();
// }

// function doneCb(){
//     console.log("vaishnavi hu mei ! ");
// }

// greetUser("duniyawalo" , doneCb ) ; 


function calculateNumbers(num1 , num2  , cb){
    let result = num1 * num2 ;
    cb(result);

}
calculateNumbers( 4 , 12 , function (result){
    console.log("result is : " + result )
})


function formatAndPrint(username , cb){
    let result = username.toUpperCase();
    cb(result);

}



// formatAndPrint("vaishnavi" , function(result){
//     console.log( "Converted string: " + result );
// })



// function  checkEvenOdd(num , isEven){
    
//     if(num%2==0){
//        isEven(true)
//     } else{
//        isEven(false)
//     }


// }

// checkEvenOdd( 7 , function(isEven){
//     console.log("number is even : " + isEven);
// });





