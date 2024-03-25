function myFunction(param1, param2, callback) {
  setTimeout(() => {
    if (param1 && param2) {
      callback(null, "Success");
    } else {
      callback("Error: Invalid parameters", null);
    }
  }, 2000);
}

function promiseBasedFunction(param1, param2) {
  return new Promise((resolve, reject) => {
    myFunction(param1, param2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

promiseBasedFunction(true, true)
  .then((result) => {
    console.log("Promise-based function:", result);
  })
  .catch((error) => {
    console.error("Promise-based function:", error);
  });
