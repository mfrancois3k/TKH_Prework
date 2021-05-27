let teacher = "Hello Teacher ";


function Clicky() {
    let input1 = prompt("Please enter your First name");
    let input2 = prompt("Please enter your Last name");
    if(input1 != null && input2 != null) {
        document.getElementById('MarkMe').innerHTML = 
        `${teacher}  ${input1}  ${input2}   You have passed Assignment 2` 

    }
}

