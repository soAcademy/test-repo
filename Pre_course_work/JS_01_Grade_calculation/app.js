
function CalculateMygrade(value)
{
    if(value>=80){
        document.getElementById("output2").innerHTML="Your grade is A"
    }
    else if(value>=70){
        document.getElementById("output2").innerHTML="Your grade is B"
    }
    else if(value>=60){
        document.getElementById("output2").innerHTML="Your grade is C"
    }
    else if(value>=50){
        document.getElementById("output2").innerHTML="Your grade is D"
    }
    else{
        document.getElementById("output2").innerHTML="Your grade is F"
    }
}

