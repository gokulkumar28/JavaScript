function change()
{
    var name=document.getElementById("name");
    var pass=document.getElementById("password");
    var qualify=document.getElementById("qualification");
    var text=document.getElementById("textarea");
    if(name.value.trim()=="")
    {
        document.getElementById("name").style.border="solid 0.5rem red";
    }
    else{
        document.getElementById("name").style.border=null;
        var username=document.getElementById("name").value;
        document.getElementById("t-user").innerText=username;
        document.getElementById("name").value="";
    }

     if(pass.value.trim()=="")
    {
        document.getElementById("password").style.border="solid 0.5rem red";
    }
    else{
        document.getElementById("password").style.border=null;
        var password=document.getElementById("password").value;
        document.getElementById("t-password").innerText=password;
        document.getElementById("password").value="";
    }

     if(qualify.value.trim()=="")
    {
        document.getElementById("qualification").style.border="solid 0.5rem red";
    }
    else{
        document.getElementById("qualification").style.border=null;
        var qua=document.getElementById("qualification").value;
        document.getElementById("t-qualification").innerText=qua;
        document.getElementById("qualification").value="";
    }

    if(text.value.trim()=="")
    {
        document.getElementById("textarea").style.border="solid 0.5rem red";
    }
    else{
        document.getElementById("textarea").style.border=null;
        var textarea=document.getElementById("textarea").value;
        document.getElementById("t-feedback").innerText=textarea;
        document.getElementById("textarea").value="";
    }

    //mail validation
    // var mail=document.getElementById("mail");
    // var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
    // if(!(mail.test(regx)))
    // {
    //    document.getElementById("mail").style.border="solid 0.2rem red";
    // }
    // else
    // {
    //     document.getElementById.apply("mail").style.border=null;
    //     var mail=document.getElementById("mail").value;
    //     document.getElementById("t-email").innerText=mail;
    //     document.getElementById("mail").value="";
    //  }
    

        var mail=document.getElementById("mail").value;
        document.getElementById("t-email").innerText=mail;
  
    return false;
}
