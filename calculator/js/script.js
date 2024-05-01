
function calc(val)
{
document.getElementById("input-bar").value += val;
return false;
}

function ans()
{
    var input_value=document.getElementById("input-bar").value;
    var result=eval(input_value);
    document.getElementById("input-bar").value=result;
}
function del()
{
    document.getElementById("input-bar").value="";
}
function remove()
{
    var number=document.getElementById("input-bar").value;
    var removed=number%10;
    document.getElementById("input-bar").value=removed;
}