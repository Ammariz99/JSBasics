/* 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

*/

function computeGrade(marks) {
  if (marks < 60) {
    return "F";
  } else if (marks < 70) {
    return "D";
  } else if (marks < 80) {
    return "C";
  } else if (marks < 90) {
    return "B";
  } else {
    return "A";
  }
}

function computeAverageAndGrade(students) {
  let totalMarks = 0;
  for (let student of students) {
    totalMarks += student.marks;
  }

  let averageMarks = totalMarks / students.length;
  let grade = computeGrade(averageMarks);

  return { averageMarks, grade };
}

let students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 },
];

let result = computeAverageAndGrade(students);
console.log("Average Marks:", result.averageMarks);
console.log("Grade:", result.grade);
