const fs=require('fs');
//Synchronous code. Change it to async using callback.
let data = fs.readFileSync('data/student.json');
console.log(JSON.parse(data));

/*
1.Convert this code to asynchronous form using a separate callback function (callBack).
2.Change the callback function to an anonymous one.
2.Take care of error handling in the callback function
*/
