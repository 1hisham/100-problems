let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};
// Write a function to find and print the subject with the highest average marks.
function subjectWithHighestAverage(classObj) {
  let toatlMarkInSubject = 0;
  let highetAverage = 0;
  let totalSubject = {};
  let highestAverageSubject = [];
  let totalNumberOfStudents = 4;
  classObj.students.forEach((student) => {
    student.marks.map((item) => {
      toatlMarkInSubject = totalSubject[item.subject];
      if (!totalSubject[item.subject]) {
        toatlMarkInSubject = 0;
      }
      toatlMarkInSubject += item.mark;
      totalSubject[item.subject] = toatlMarkInSubject;
    });
  });
  Object.entries(totalSubject).forEach(([key, value]) => {
    let averageMarks = value / totalNumberOfStudents;
    if (averageMarks > highetAverage) {
      highetAverage = averageMarks;
    }
  });
  Object.entries(totalSubject).forEach(([key, value]) => {
    let averageMarks = value / totalNumberOfStudents;
    if (averageMarks === highetAverage) {
      highestAverageSubject.push(key);
    }
  });
  return highestAverageSubject;
}
console.log(subjectWithHighestAverage(classObj));
