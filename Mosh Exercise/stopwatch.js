class Stopwatch {
  constructor() {
    this.duration = 0;
    this.isRunning = false;
    this.startTime = null;
  }

  start() {
    if (this.isRunning) {
      console.log("Stopwatch is already started.");
    } else {
      this.isRunning = true;
      this.startTime = new Date();
      console.log("Stopwatch started.");
    }
  }

  stop() {
    if (!this.isRunning) {
      console.log("Stopwatch is not started.");
    } else {
      const endTime = new Date();
      const elapsedMilliseconds = endTime - this.startTime;
      this.duration += elapsedMilliseconds / 1000;
      this.isRunning = false;
      console.log("Stopwatch stopped.");
    }
  }

  getDuration() {
    return this.duration;
  }

  reset() {
    this.duration = 0;
    this.isRunning = false;
    this.startTime = null;
    console.log("Stopwatch reset.");
  }
}

const myStopwatch = new Stopwatch();

myStopwatch.start();

setTimeout(() => {
  myStopwatch.stop();
  console.log("Duration:", myStopwatch.getDuration() + " seconds");

  myStopwatch.start();

  myStopwatch.reset();
}, 2000);
