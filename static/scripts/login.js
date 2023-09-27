// Função para registrar um novo usuario e gravar no local storage
function registrarUsuario(){
    event.preventDefault();
    var usuario = document.getElementById("usuario-input").value;
    var email = document.getElementById("email-input").value;
    var senha = document.getElementById("senha-input").value;

    // Check if email already exists
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var existingUser = JSON.parse(localStorage.getItem(key));
        if (existingUser.email === email) {
            alert("Email já existente!");
            return;
        }
    }

    //criar classe usuario com valores recebitos
    var classeUsuario = {
        usuario:usuario,
        email:email,
        senha:senha
    }

    //transformar classe usuario para o formato json
    var json = JSON.stringify(classeUsuario);
    //armazenar valores no local storage
    localStorage.setItem(usuario, json);

    alert("Usuário cadastrado com sucesso!");
    console.log(usuario);
    
    //deu tudo certo! voltar para o login!
    window.location.href = "login.html"
}

function logarUsuario(){
    event.preventDefault();
    // pegar valores de input do login
    var usuario = document.getElementById("usuario-input-login").value;
    var senha = document.getElementById("senha-input-login").value;

    // buscar valores do local storage
    var classeUsuario = localStorage.getItem(usuario);
    console.log(classeUsuario);

    var data;

    // verificar se usuario está cadastrado
    // caso verdadeiro, armazenar data
    if (classeUsuario) {
        data = JSON.parse(classeUsuario);
    } else {
        alert("Usuário ou senha incorretos");
        return;
    }

    console.log(data);

    //verificar a senha e o usuario
    // caso verdadeiro levar para a paginha index
    if (usuario == data.usuario && senha == data.senha) {
        alert('Login realizado com Sucesso!');
        sessionStorage.setItem("AuthenticationState", "Authenticated");
        window.location.href = "index.html"
    } else {
        alert("Usuário ou senha incorretos");
    }
}
