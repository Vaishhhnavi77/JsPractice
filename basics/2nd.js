

function filterAdultsMale(user){
    return user.filter(user => user.age> 18 && user.gender =="male");

}

const user = [{
    name: "harkirat",
    age: 21,
    gender: "male"

}, {
    name: "vaishnavi",
    age: 21,
    gender: "female",

}, {
    name: "vaishu",
    age: 17,
    gender: "male",

}
]
console.log(filterAdultsMale(user));