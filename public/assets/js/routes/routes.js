function routes(){
    let path = window.location.pathname
    if(path=="/"){
        const dom = document.createElement('a')
        document.body.appendChild(dom)
    }
    else if(path == "/login" || path == "/signup"){

        document.querySelector("#root").innerHTML=UILoginSigup.loadUILogin()
    }
}
window.addEventListener("load",routes)