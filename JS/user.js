const login = () =>{
    let user = localStorage.getItem("user")

    if (user) {
        document.getElementById("txtUser").innerHTML=user;
        document.getElementById("txtLogin").innerHTML="Sair";
    } else {
        document.getElementById("txtLogin").innerHTML="Login";
    }
}

login()