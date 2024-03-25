async function callbackDelay(callback) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  callback();
}

function myCallback() {
  console.log("Callback function executed after 2 seconds.");
}

callbackDelay(myCallback);
