
async function routes(){
    let path = window.location.pathname;
    let rootDOM = getElById("root");
    let session;
    await axios.post('/session').then(result=>{
        // console.log(result.data);
        session = result.data;
    }).catch(err=>{
        session = false;
    });
    // console.log(session)
    if(path.indexOf("/admin")>-1){
        if(session.session){
            document.title = "Admin"
            rootDOM.innerHTML=AdminUI.AdminPage();
            AdminUI.changeUsernameEmail(session.username,session.email)
            AdminUI.loadPage();
        }else{
            history.pushState({},"LoginPage","/login");
            rootDOM.innerHTML = LoginSigup.loadUILoginSignUp();
        }
    }else if(path=='/logout'){
        history.pushState({},"LoginPage","/login");
        document.title="LoginPage";
        rootDOM.innerHTML=LoginSigup.loadUILoginSignUp();
    }
    else if(path=="/"){
        document.title="AwesomeShop"
        // Dashboard.loadAllProduct();        
    }
    else if(path == "/login" || path == "/signup"){
        if(session.session){
            history.pushState({},"Admin","/admin")
            document.title = "Admin"
            rootDOM.innerHTML=AdminUI.AdminPage();
            AdminUI.changeUsernameEmail(session.username,session.email)
            AdminUI.loadPage();      
        }else{
            if(path=="/login"){
                document.title="LoginPage"
            }else{
                document.title="SignUp"
            }
            rootDOM.innerHTML = LoginSigup.loadUILoginSignUp();
        }
    }
}
routes();
window.onpopstate = routes; // keep track on url and fix about refresh page and other stuff.