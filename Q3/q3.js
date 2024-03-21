const currentDate = new Date();

const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

console.log(`Today is ${currentMonth}/${currentDay}/${currentYear}`);
