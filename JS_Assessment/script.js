var bookRegx=/([a-zA-Z0-9])$/;
var book=document.getElementsByClassName("book").value;
function bookValidation()
{
    if(bookRegx.test(book) && book.trim()!="" )
    {
        document.getElementById("bookvalid").innerHTML="valid";
        document.getElementById("bookvalid").style.visibility="visible";
        document.getElementById("bookvalid").style.color="green";
        
    }
    else if(!bookRegx.test(book)||book.trim()==""){
        document.getElementById("bookvalid").innerHTML="Invalid";
        document.getElementById("bookvalid").style.visibility="visible";
        document.getElementById("bookvalid").style.color="red";  
    }
}

var mail=document.getElementsByClassName("author-email").value;
var mailRegx=/([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,8})$/;
function emailValidation()
{
    if(mailRegx.test(mail))
    {
        document.getElementById("mailvalid").innerHTML="valid";
        document.getElementById("mailvalid").style.visibility="visible";
        document.getElementById("mailvalid").style.color="green";
    }
    else
    {
        document.getElementById("mailvalid").innerHTML="Invalid";
        document.getElementById("mailvalid").style.visibility="visible";
        document.getElementById("mailvalid").style.color="red";  
    }
}

var auhtorName=document.getElementsByClassName("author-name").value;
var nameRegx=/([a-zA-Z0-9]+)$/;

function nameValidation()
{
    if(nameRegx.test(auhtorName))
    {
        document.getElementById("namevalid").innerHTML="valid";
        document.getElementById("namevalid").style.visibility="visible";
        document.getElementById("namevalid").style.color="green";
    }
    else
    {
        document.getElementById("namevalid").innerHTML="Invalid";
        document.getElementById("namevalid").style.visibility="visible";
        document.getElementById("namevalid").style.color="red";
    }
}

//publish validation
var publish=document.getElementsByClassName("published").value;
var publishRegx=/([0-9]\d{4})$/;
function publishValidation()
{
    if(publishRegx.test(publish)||   publish<=2024 && publish>=1000)
    {
        document.getElementById("publishvalid").innerHTML="valid";
        document.getElementById("publishvalid").style.visibility="visible";
        document.getElementById("publishvalid").style.color="green";
    }
    else
    {
        document.getElementById("publishvalid").innerHTML="Invalid";
        document.getElementById("publishvalid").style.visibility="visible";
        document.getElementById("publishvalid").style.color="red";
    }
}


//price validation

var price=document.getElementsByClassName("price").value;
var priceRegx=/^([0-9]+).([0-9]+)$/;

function priceValidation()
{
    if(priceRegx.test(price))
    {
        document.getElementById("pricevalid").innerHTML="valid";
        document.getElementById("pricevalid").style.visibility="visible";
        document.getElementById("pricevalid").style.color="green";
    }
    else
    {
        document.getElementById("pricevalid").innerHTML="Invalid";
        document.getElementById("pricevalid").style.visibility="visible";
        document.getElementById("pricevalid").style.color="red";
    }
}

function validation()
{
    //book validating

    if(bookRegx.test(book))
    {
        document.getElementById("bookvalid").innerHTML="valid";
        document.getElementById("bookvalid").style.visibility="visible";
        document.getElementById("bookvalid").style.color="green";
        
    }
    else if(!bookRegx.test(book)||book.trim()=="")
    {
        document.getElementById("bookvalid").innerHTML="Invalid";
        document.getElementById("bookvalid").style.visibility="visible";
        document.getElementById("bookvalid").style.color="red";  
    }

    //mail validating

    if(mailRegx.test(mail))
    {
        document.getElementById("mailvalid").innerHTML="valid";
        document.getElementById("mailvalid").style.visibility="visible";
        document.getElementById("mailvalid").style.color="green";
    }
    else
    {
        document.getElementById("mailvalid").innerHTML="Invalid";
        document.getElementById("mailvalid").style.visibility="visible";
        document.getElementById("mailvalid").style.color="red";  
    }

    //name validation

    if(nameRegx.test(auhtorName))
    {
        document.getElementById("namevalid").innerHTML="valid";
        document.getElementById("namevalid").style.visibility="visible";
        document.getElementById("namevalid").style.color="green";
    }
    else
    {
        document.getElementById("namevalid").innerHTML="Invalid";
        document.getElementById("namevalid").style.visibility="visible";
        document.getElementById("namevalid").style.color="red";
    }

    //publish validation

    if(publishRegx.test(publish)|| publish<=2024 && publish>=1000)
    {
        document.getElementById("publishvalid").innerHTML="valid";
        document.getElementById("publishvalid").style.visibility="visible";
        document.getElementById("publishvalid").style.color="green";
    }
    else
    {
        document.getElementById("publishvalid").innerHTML="Invalid";
        document.getElementById("publishvalid").style.visibility="visible";
        document.getElementById("publishvalid").style.color="red";
    }

    if(priceRegx.test(price))
    {
        document.getElementById("pricevalid").innerHTML="valid";
        document.getElementById("pricevalid").style.visibility="visible";
        document.getElementById("pricevalid").style.color="green";
    }
    else
    {
        document.getElementById("pricevalid").innerHTML="Invalid";
        document.getElementById("pricevalid").style.visibility="visible";
        document.getElementById("pricevalid").style.color="red";
    }

    return false;
}

//dispaly show

function show()
{
    
    var book=document.getElementsByClassName("show-book").value;
    var category=document.getElementsByClassName("show-category").value;
    var mail=document.getElementsByClassName("show-author-email").value;
    var name=document.getElementsByClassName("show-author-name").value;
    var year=document.getElementsByClassName("show-publish-year").value;
    var price=document.getElementsByClassName("show-price").value;

    document.getElementsByClassName("show-book").innerHTML=book;
    document.getElementsByClassName("show-category").innerHTML=category;
    document.getElementsByClassName("show-author-email").innerHTML=mail;
    document.getElementsByClassName("show-author-name").innerHTML=name;
    document.getElementsByClassName("show-publish-year").innerHTML=year;
    document.getElementsByClassName("show-price").innerHTML=price;
    document.getElementsByClassName("whole-container-2").style.visibility="visible";
}

function cancel()
{
    document.getElementsByClassName("book").innerHTML="";
    document.getElementsByClassName("author-email").innerHTML="";
    document.getElementsByClassName("author-name").innerHTML="";
    document.getElementsByClassName("publish").innerHTML="";
    document.getElementsByClassName("price").innerHTML="";   
}
