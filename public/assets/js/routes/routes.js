
function routes(){
    let path = window.location.pathname
    
    if(path=="/"){
        const dom = document.createElement('a')
        document.body.appendChild(dom)
    }
    else if(path == "/login" || path == "/signup"){
        if(path=="/login"){
            document.title="LoginPage"
            // history.pushState({},"LoginPage")
        }else{
            document.title="SignUp"
            // history.pushState({},"SignUp")
        }
        document.querySelector("#root").innerHTML=UILoginSigup.loadUILogin();
    }
}

routes();
