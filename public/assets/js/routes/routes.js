
function routes(){
    let path = window.location.pathname
    let rootDOM = getElById("root");
    if(path=="/admin"){
        document.title = "Admin"
        rootDOM.innerHTML=Admin.loadUIProduct();
    }
    else if(path == "/login" || path == "/signup"){
        if(path=="/login"){
            document.title="LoginPage"
        }else{
            document.title="SignUp"
        }
        rootDOM.innerHTML = LoginSigup.loadUILoginSignUp();
    }
}
routes();
window.onpopstate = routes; // keep track on url and fix about refresh page and other stuff.