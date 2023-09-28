// VERIFICAR SE A PESSOA ESTÁ AUTENTICADA AO TENTAR ENTRAR NA PÁGINA inder.html

//Verificar se o valor de 'AuthenticationState' é igual a null.
//Se for tu vai de ralo O.o'
if (sessionStorage.getItem('AuthenticationState') === null) {
    alert("Access Denied");
    window.location.href = "login.html"
}
 else {
   //O usuário está autenticado, então ele vai seguir normalmente para index.html
 }

 // A VERIFICAÇÃO ACONTECE NO ARQUIVO login.js, linha 64
 // APÓS VERIFICAR SE O LOGIN E SENHA ESTÃO CORRETOS,
 // A FUNÇÃO SERVE PARA ARMAZENAR A AUTENTICAÇÃO NA SESSÃO ATUAL
//  sessionStorage.setItem("AuthenticationState", "Authenticated");
//  window.location.href = "index.html"