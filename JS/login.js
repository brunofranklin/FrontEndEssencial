const btnLogin = document.querySelector("#btn-login")
const email = document.querySelector("#email")
const pass = document.querySelector("#pass")

const emailCadastrado = "bruno@carrotech.com"
const senhaCadastrado = "123"
const userCadastrado = "Bruno"

const handleLogin = () =>{
    if(emailCadastrado == email.value && senhaCadastrado == pass.value){
        window.location.href = "index.html"
        localStorage.setItem("user", userCadastrado)
    }
    else{
        alert("Login ou senha inválidos")
    }

}
btnLogin.addEventListener('click',handleLogin);

localStorage.removeItem("user")


