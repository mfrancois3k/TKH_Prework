const words = "AHHHHHHHHHHHHHHHHHHHHHHH";
const shout = alert(words)
let hit = document.querySelector('.Clicky');

function clickMe(){
  return hit.addEventListener("click", () =>{
      return shout;
  });
}

clickMe()