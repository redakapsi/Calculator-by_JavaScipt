const display = document.getElementById("display");

function add(input)
{
display.value += input;
}
function AC()
{
    display.value = "";
}
function calculate()
{
    try{
display.value = eval(display.value)
    }
    catch(error)
    {
        display.value ="Error"
    }
}