function numbers(){
    let one = parseInt(prompt(`Type first number `));
    let two = parseInt(prompt(`Type second number `));
    let result = one + two;
    let badTeacher =  document.getElementById('MarkMe').innerHTML = ' you cant trick me teacher :) go back an type a number';
    let pass = document.getElementById('MarkMe').innerHTML = `${one} + ${two} = ${result} : Yaaa You have passed Assignment 3`;
    

      if(!Number.isInteger(one) ){
        return alert(badTeacher)
       
      } else if(!Number.isInteger(two) ){
        return alert(badTeacher);
       
      
      }  else if(!(Number.isInteger(two) && Number.isInteger(one)) || (Number.isInteger(two) === undefined && Number.isInteger(one) === undefined) || (!Number.isInteger(two) && Number.isInteger(one)) || (typeof(two) && !typeof(one))){
        let fail = document.getElementById('MarkMe').innerHTML = 'no good start over teacher';
          return alert(fail);
         
      }  else   {
          return alert(pass);
      }
      
   



} 
// if(isNaN(one)) {
//     document.getElementById('MarkMe').innerHTML = 
//     `You can't trick me teacher you put the wrong number for the 1st number` 


//  }else if(isNaN(two)){
//     document.getElementById('MarkMe').innerHTML = 
//     `You can't trick me teacher you put the wrong number for the 2nd number`
// } else {
// document.getElementById('MarkMe').innerHTML = 
// `${one} + ${two} = ${result} : Yaaa You have passed Assignment 3` 
// }