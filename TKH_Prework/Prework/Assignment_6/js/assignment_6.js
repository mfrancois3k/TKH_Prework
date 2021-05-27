let array = [ "Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele"] ;
let body = document.getElementById('MarkMe').innerHTML = array;
function longestString(strs) {
  let longest_name = '';
  let  answer 
  for (let i = 0; i < strs.length; i++) {
   
  if (strs[i].length > longest_name.length)
  longest_name = strs[i];
   answer = longest_name;
  }
  return alert(answer);
  }
longestString(body);