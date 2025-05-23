function entrar(){

let usuario = document.getElementById("email");
let senha = document.getElementById("senha");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(usuario.value ==''){
    alert("coloque o seu email!");

}
else if(!emailRegex.test(usuario.value)){ //emailRegex é uma expressão regular, e para testá-la você precisa usar o método .test(valor). para verificar se o formato do email não é valido 

    alert("formato de email não é valido")
}
 else if (senha.value == ''){
    alert("informe a sua senha");
}
else{
    alert("logado com suceso !")
}

}