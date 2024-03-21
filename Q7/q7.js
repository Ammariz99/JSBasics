for (let year = 2014; year <= 2050; year++) {
  const firstJan = new Date(year, 0, 1);
  if (firstJan.getDay() === 0) {
    console.log(`${year} 1st January falls on sunday.`);
  }
}
