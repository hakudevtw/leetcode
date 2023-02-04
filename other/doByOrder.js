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

const doByOrder = async (tasks, callback) => {
  function doTask(task, callback) {
    return new Promise((resolve) => {
      task((arg) => {
        resolve();
        callback(arg);
      });
    });
  }

  for (let i = 0; i < tasks.length; i++) {
    await doTask(tasks[i], callback);
  }
};

doByOrder(tasks, console.log.bind(console));
