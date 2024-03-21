function calculateGrade(totalMarks, isFinalExam) {
  if (isFinalExam && totalMarks >= 90) {
    return true;
  } else if (!isFinalExam && totalMarks >= 89 && totalMarks <= 100) {
    return true;
  } else {
    return false;
  }
}

let totalMarks = prompt("Enter total marks: ");
let isFinalExam = prompt("Is this a final exam? (true/false): ") === "true";

let isAPlusGrade = calculateGrade(totalMarks, isFinalExam);

console.log("A+ grade?", isAPlusGrade);
