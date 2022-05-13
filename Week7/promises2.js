// let promise = new Promise((resolve, reject) => {
//     // the function is executed automatically when the promise is constructed

//     //after 1 second signal that the job is done with the result "done"

//     setTimeout(() => resolve("done"), 1000);
// });

// promise.then(
//     (result) => alert(result),
//     (error) => alert(error)
// );

// let promise = new Promise((resolve, reject) => {
//     let obj = {
//         userId: 1,
//         id: 1,
//         title: "delectus aut autem",
//         completed: false,
//     };

//     resolve(obj);
//     //reject should be last if you want firstly check resolve and just later reject error
//     reject("something did not work");
// });
// //then waits reject or resolve from promise
// promise.then(
//     // (result) => console.log(result),
//     (result) => console.log(result.title),
//     (error) => console.log(error)
// );
// //so promise return in result object title

// console.log("outside of promise");

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
