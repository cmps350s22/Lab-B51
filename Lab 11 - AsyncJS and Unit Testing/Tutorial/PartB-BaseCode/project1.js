import fs from 'fs'
//Synchronous code. Change it to async using callback.
// let data = fs.readFileSync('data/student.json');
// console.log(JSON.parse(data));

/*
1.Convert this code to asynchronous form using a separate callback function (callBack).
2.Change the callback function to an anonymous one.
2.Take care of error handling in the callback function
*/

fs.readFile('data/student.json', (err, data) => {
    if (err)
        console.log('unable to open the file or there is nothing to display')
    else{
        console.log(JSON.parse(data))

    }

});


console.log('the remaining code of our program')

