import General from "./General.class.js";

class Login extends General {

handleLogin = () => {

    const login = document.getElementById("submit-login");

    this.pageRedirect(login, "../../../home.html");

}

}

export default Login;