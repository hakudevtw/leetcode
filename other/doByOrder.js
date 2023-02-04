/* a, b, c 是三個 request 的 callback function，
 ** 分別會延遲 500, 200 300 毫秒回來
 ** 執行 doByOrder 之後會後依序印出 b, c, a
 ** 希望能改成印出 a, b, c
 */

// DON'T change a, b, c function
const a = (callback) => {
  setTimeout(() => {
    callback("a");
  }, 500);
};

const b = (callback) => {
  setTimeout(() => {
    callback("b");
  }, 200);
};

const c = (callback) => {
  setTimeout(() => {
    callback("c");
  }, 300);
};

const tasks = [a, b, c];

// const doByOrder = async (tasks, callback) => {
//   function doTask(task, callback) {
//     return new Promise((resolve) => {
//       task((arg) => {
//         resolve();
//         callback(arg);
//       });
//     });
//   }

//   for (const task of tasks) {
//     await doTask(task, callback);
//   }
// };

// const doByOrder = (tasks, callback) => {
//   Promise.resolve(tasks[0])
//     .then((task) => {
//       return new Promise((resolve) => {
//         task((arg) => {
//           callback(arg);
//           resolve(tasks[1]);
//         });
//       });
//     })
//     .then((task) => {
//       return new Promise((resolve) => {
//         task((arg) => {
//           resolve(tasks[2]);
//           callback(arg);
//         });
//       });
//     })
//     .then((task) => {
//       return new Promise((resolve) => {
//         task((arg) => {
//           resolve();
//           callback(arg);
//         });
//       });
//     });
// };

const doByOrder = (tasks, callback) => {
  let i = 0;
  const next = () => {
    if (i > tasks.length - 1) return;
    tasks[i++]((val) => {
      callback(val);
      next();
    });
    // tasks[i]((val) => {
    //   callback(val);
    //   i++;
    //   next();
    // });
  };

  next();
};

doByOrder(tasks, console.log.bind(console));
