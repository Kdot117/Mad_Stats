function validate()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username=="admin"&& password == 'user'){

        alert('Login successfully');
        window.location.replace ("index.html"); 
        return false;
    }
    else
    {
        alert("login failed");

    }

}