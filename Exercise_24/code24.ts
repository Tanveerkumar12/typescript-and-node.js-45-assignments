//Tests for equality and inequality with strings
let School="PIAIC";
console.log("Is School='Piaic'? ")
console.log(School=="PIAIC");   // ===> True 


///Tests using the lower case function
let School_lowercase="piaic";
console.log("Is School='Piaic'? ")
console.log(School_lowercase=="Piaic"); // ==> Writing case matters if you declared the variable data in lower case you also need to write the data in lower case in order to implement the consition as true..


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
  let num1=4;
  let num2=4;
  console.log(num1===num2);  //==> here condition is javascript converted the string into num and declared statement as true


  //if we use num1===num2 this will be strickty equal to and the condtion will return false 


  // Greater than and Less than 

  let num3=59
  let num4=56
  console.log(num3>num4)
  console.log(num3<num4)
  

// Greater than  equal and Less than equal

  let num5=59;
  let num6=56;
  console.log(num5>=num6);
  console.log(num6<=num5);



  // Tests using "and" and "or" operators

 /* let n1=37;
  let n2= 34;
  let n3=100;
  document.write(n1 && n2  < n3) */  //== True
  
  let n1=37;
  let n2= 34;
  let n3=100;
  console.log(n1 || n2  >n3) 