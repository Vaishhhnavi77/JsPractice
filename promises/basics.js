
// let myPromise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let done = true ;

//         if(done){
//             resolve (" kaam ho gaya : ");
//         }else {
//              reject("fail ho gaya : ");

//         }
       
//     }, 2000);
// })


// myPromise 
// .then((message) => {
//     console.log("success : " + message);
// })
// .catch((error)=> {
//     console.log("error : " + error);
// })





// function pizzaOrder (){
//     return new Promise ((resolve , reject) => {
//         let pizzaMaking = false;
//         if(pizzaMaking){
//             resolve("pizza mil jayega");

//         }else{
//             reject("nahi milega");
//         }
//     });
// }

// pizzaOrder()
//     .then((msg) => {
//         console.log("success: " + msg);

//     })
//     .catch((err) => {
//         console.log("error : " + err);
//     })


let datePromise = new Promise((resolve , reject) => {
    setTimeout(()=>{
        let done = true ;
        if(done){
            resolve (" Date mil gaya!"); 
        }else{
            reject("nahi mili");

        }
    } , 1000);
})

datePromise 
.then((msg) => {
    console.log(msg);
})
.catch((error) =>{
     console.log(error);

})


