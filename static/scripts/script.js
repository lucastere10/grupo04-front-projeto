//Is the user authenticated?
if (sessionStorage.getItem('AuthenticationState') === null) {
    alert("Access Denied");
    window.location.href = "login.html"
}
 else {
   //The user is authenticated and the authentication has not expired.
 }