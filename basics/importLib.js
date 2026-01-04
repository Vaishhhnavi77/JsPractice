// const fs = require("fs"); //fs is a library 

// const contents = fs.readFileSync( "a.txt" ,"utf-8")
// console.log(contents);
// const contents2 = fs.readFileSync( "b.txt" ,"utf-8")
// console.log(contents2);
  
const fs = require("fs");

function print(err, data){
    console.log(data);
}