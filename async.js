console.log('first');
console.log('second');

const timeOutID = setTimeout(() => {
  console.log('third');
}, 5000);

//stops the timeout
clearTimeout(timeOutID);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => {
//     console.log('response received');
//     return res.json();
// })
// then.(json => console.log(json));

console.log('fourth');
console.log('fifth');
