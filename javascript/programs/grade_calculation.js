function grade(marks){
    if (marks>=90 && marks<=100){
        console.log("Grade : O");      
        } 
      else if (marks>=75 && marks<90) {
              console.log("Grade : A+"); 
                } 
      else if (marks>=60 && marks<75) 
           {
              console.log("Grade : A"); 
      } 
      else if (marks>=55 && marks<60) {
              console.log("Grade : B+"); 
      }
       else if (marks>45 && marks<55) {
              console.log("Grade : B"); 
      }
      else if (marks>=35 && marks<45) {
        console.log("Grade : C"); 
}
else if (marks>=1 && marks<35) {
    console.log("Grade : F"); 
}
}

grade(91);
grade(80);
grade(74);
grade(34);
grade(56);
grade(60);
