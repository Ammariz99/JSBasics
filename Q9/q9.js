const today = new Date();
const currentYear = today.getFullYear();
const christmas = new Date(currentYear, 11, 25);
const timeDifference = christmas.getTime() - today.getTime();
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
console.log(`${daysLeft} days left in Christmas.`);
