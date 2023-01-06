function CtoF(Celsuis) 
{
    let Fahrenhiet = parseInt(Celsuis)*9/5+32;
    return Fahrenhiet.toFixed(2) + " °F"  
}

function FtoC(Fahrenhiet)
{      
    let Celsuis = (parseInt(Fahrenhiet)-32)*5/9;
    return Celsuis.toFixed(2) + " °C"  

}


function display1(ElementId, value)
{
    document.getElementById(ElementId).innerHTML = document.getElementById('input').value+ "°C = " +"<b>"+value+"</b>"
}
function display2(ElementId, value)
{
    document.getElementById(ElementId).innerHTML = document.getElementById('input').value+ "°F = " +"<b>"+value+"</b>"
}


function ToCelsuisProgram(value){
    display1("output",CtoF(value))
    /*alert(CtoF(value));*/   
}
function ToFahrenheitProgram(value){
    /*alert(FtoC(value));*/   
    display2("output",FtoC(value))
    
}

