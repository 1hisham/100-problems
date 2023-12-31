let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}    
// 14. Write a function to find and print the student with the lowest total marks.

function studentWithLowestMark(classObj) {
    const studentLowestMark = []
    let lowestMark = 250;
    classObj.students.forEach((student) => {
      let totalMark = 0;
      student.marks.forEach((items) => {
          totalMark += items.mark
      });
      if(totalMark < lowestMark){
          lowestMark = totalMark
      }
    });
    classObj.students.forEach((student) => {
      let totalMark = 0;
      student.marks.forEach((items) => {
          totalMark += items.mark
      });
      if(totalMark === lowestMark){
          studentLowestMark.push(student.name)
      }
    });
    return studentLowestMark
  }
  
  console.log(studentWithLowestMark(classObj));
  