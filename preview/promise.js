// setTimeout(() => console.log(6), 6);
// setTimeout(()=>console.log(8), 8)

// const promise = new Promise((성공, 실패) => {
//   console.log(1); 
//   setTimeout(() => {
//     console.log(4);
//     성공(5);
//     console.log(10);
//   }, 7);

//   console.log(2); 
// });

// console.log(promise);
// promise.then(console.log); // 5 출력
// console.log(3); 


//-------------------------
// setTimeout(() => console.log(6));
// setTimeout(() => console.log(8));

// const promise2 = new Promise((resolve, reject) => {
//   console.log(1);

//   setTimeout(() => {
//     console.log(4);
//     console.log(10);
//     resolve(5);
//   });

//   console.log(2);
// });

// console.log(promise2);
// promise2.then(console.log, console.log('--')); // 44 출력
// console.log(3);

console.log("start");  
const interval = setInterval(() => {
  console.log("setInterval");
}, 0);
setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve()
    .then(() => {
      console.log("promise 3");
    })
    .then(() => {
      console.log("promise 4");
    })
    .then(() => {
      setTimeout(() => {
        console.log("setTimeout 2");
        Promise.resolve()
          .then(() => {
            console.log("promise 5");
          })
          .then(() => {
            console.log("promise 6");
          })
          .then(() => {
            clearInterval(interval);
          });
      }, 0);
    });
}, 0);
new Promise((res, rej) => {
  console.log(123)
})
Promise.resolve()
  .then(() => {
    console.log("promise 1");
  })
  .then(() => {
    console.log("promise 2");
  });

console.log("end"); 


// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 0)
// const a = new Promise((res, rej) => {
//   console.log(3)
//   console.log(4);
//   res('answer');
//   // setTimeout(() => {
//   // },0);
// })
// console.log(5);
// console.log(a);
// a.then(() => {
//   console.log(6)
// })
// console.log(7)