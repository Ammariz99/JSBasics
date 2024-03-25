function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async operation 1 completed.");
      resolve("Result 1");
    }, 2000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async operation 2 completed.");
      resolve("Result 2");
    }, 1500);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async operation 3 completed.");
      resolve("Result 3");
    }, 1000);
  });
}

async function performSequentialOperations() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2();
    const result3 = await asyncOperation3();

    console.log("Results:", result1, result2, result3);
  } catch (error) {
    console.error("Error performing sequential operations:", error);
  }
}
performSequentialOperations();
