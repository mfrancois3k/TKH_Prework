
let over_under_array = [1,45,32,21,5,17,43,93];
const loops = function loop(...args) {
 
    for (var i = 0; i < args.length; i++) {
       
        args[i].length < 25 ? console.log("Under") : console.log("Over") ;
      }
    }
    
    console.log(loops(over_under_array)); 

