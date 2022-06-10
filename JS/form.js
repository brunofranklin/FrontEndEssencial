const btnForm = document.querySelector("#btn-form");
const nome = document.querySelector("#form-name")
const email = document.querySelector("#form-email")
const menssagem = document.querySelector("#form-message");


const alertForm = () =>{
    let nulo = "";
    
    if(nome.value != nulo && email.value != nulo && menssagem.value != nulo){
        alert(nome.value + ", o seu formulário foi enviado com sucesso!");
        console.log(nome.value);
        console.log(email.value);
        console.log(menssagem.value);
    }
    else{
        alert("Prencha todos os campos antes de enviar");
    }
}

btnForm.addEventListener('click', alertForm);