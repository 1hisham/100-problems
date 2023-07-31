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
//Write a function to find and print the student with the highest marks in a specific subject.
function studentWithHighstMarkInSubject(subject, classObj) {
  let studentHighestMark = 0;
  let studentName = [];
  classObj.students.forEach((student) => {
    student.marks.forEach((item) => {
      if (item.subject === subject) {
        if (item.mark > studentHighestMark) {
          studentHighestMark = item.mark;
        }
      }
    });
  });
  
  classObj.students.forEach((student) => {
    student.marks.forEach((item) => {
      if (item.subject === subject) {
        if (item.mark === studentHighestMark) {
          studentName.push(student.name);
        }
      }
    });
  });

  return studentName;
}
console.log(studentWithHighstMarkInSubject("Maths", classObj));
//Write a function to find and print the student with the lowest marks in a specific subject.
function studentWithLowestMarkInSubject(subject, classObj) {
    let studentLowestMark = 50;
    let studentName = [];
    classObj.students.forEach((student) => {
      student.marks.forEach((item) => {
        if (item.subject === subject) {
          if (item.mark < studentLowestMark) {
            studentLowestMark = item.mark;
          }
        }
      });
    });


    classObj.students.forEach((student) => {
      student.marks.forEach((item) => {
        if (item.subject === subject) {
          if (item.mark === studentLowestMark) {
            studentName.push(student.name)
          }
        }
      });
    });
  
    return studentName;
  }
  console.log(studentWithLowestMarkInSubject("Computer", classObj));
