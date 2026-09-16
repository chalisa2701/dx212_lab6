let name = "John Doe";
let age = 30;
let graduated = true;
let gpa = 3.75;

let student1 = {
  name: "manee",
  age: 19,
  graduated: true,
  gpa: 2.65
};

let student2 = {
  name: name,
  age: age,
  graduated: graduated,
  gpa: gpa
};

console.log(student1.name);
console.log(student2);

let grades = ["A", "B", "C", "D", "F"];
let scores = [90, 80, 70, 60, 50];
let students = [student1, student2];

console.log(grades[1]);

function calculateAverage(scores) {
     if (average >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateAverage(90));

for (let i = 0; i < students.length; i++) {
    let grade = calculateAverage(students[i]};
    console.log(`Student: ${students[i].name}, Grade: ${grade}`);