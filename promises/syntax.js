// const { log } = require("console")

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "vaishnavi", password: "123" })

        } else {
            reject('ERROR : Something went wrong ')
        }
    }, 1000)

})
promiseOne.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
})