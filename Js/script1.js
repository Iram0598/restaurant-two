function validation()
{
    var username= document.getElementById('Uname').value;
    var password= document.getElementById('Pass').value;
    if(username=="admin" && password=="user")
    {
        alert("Login Successfull");
    }
    else
    {
        alert("Login Failed");
    }
}