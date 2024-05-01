
var car=["car","ramn","ferari"];
document.write(car[0]);
var cars=new Array("hvdash","hdv");

var fruit={
    price: 10032,
    color:"red",
    taste:"awesome",
    newone:true,
    testing: function()
    {
        document.write("from fruit object tested successfully");
    }
}
console.write(fruit.testing());

function fruits(price,color,taste,newone)
{
    this.price=price,
    this.Color=color,
    this.Taste=taste,
    this.Newone=newone,
    this.testing=function()
    {
        document.write("hello");
    }
}
var fruit1=new fruits(128299,"red","awsome",false);
var fruit2=new fruits(31287,"blue","good",true);
document.write(fruit1.price);


function buttonClick()
{
    document.getElementById("para").innerHTML="welcome to home tour";
}


hello();
function hello() 
{
    var b = 5;
    switch (b) {
        case 1:
            {
                document.write("<h2>sunday</h2>");
                break;
            }
        case 2:
            {
                document.write("<h2>monday</h2>");
                break
            }
        case 3:
            {
                document.write("<h2>tuesday</h2>");
                break
            }
        case 4:
            {
                document.write("<h2>wednesday</h2>");
                break
            }
        case 5:
            {
                document.write("<h2>thurday</h2>");
                break
            }
        case 6:
            {
                document.write("<h2>friday</h2>");
                break
            }
        case 7:
            {
                document.write("<h2>saturday</h2>");
                break;
            }
    }
}
var id=0;
var seconds=0;
function print()
{
    document.getElementById("content").innerHTML= seconds+" seconds";
    seconds++;
}
function start()
{
    id=window.setTimeout(print,1000);
   
}
function stop()
{
    window.clearTimeout(id);
}

function pass()
{
    var first=document.getElementById("firstname");
    var last=document.getElementById("lastname");
    var password=document.getElementById("password");
    
    if(first.value.trim()==""||last.value.trim()==""||password.value.trim()=="")
    {
        alert("fieled is empt");
        return false;
    }
    else
        true;
}
function mailValidation()
{
    var mail=document.getElementById("mail");
    var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
    if(regx.test(mail))
    {

    }
    else{
        alert("give correct email format");
    }
}