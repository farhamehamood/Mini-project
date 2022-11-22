function login(){
    var username=document.getElementById('Ussr').value
    var password=document.getElementById('Pass').value
    if(username=="farhaMehamood"  &&  password=="1234")
    {
location.assign("http://127.0.0.1:5500/cloneWebsites/finalFirstcryweb.html");
    }
    else{
        window.alert("login failed");
    }
}


