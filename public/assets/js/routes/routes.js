
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
            // history.pushState({},"LoginPage")
        }else{
            document.title="SignUp"
            // history.pushState({},"SignUp")
        }
        rootDOM.innerHTML = LoginSigup.loadUILoginSignUp();
    }
}
routes();
