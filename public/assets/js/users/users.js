class LoginSignup{
    constructor(email,password){
        this.email=email;
        this.password = password;
    }
}
class UILoginSigup{
    static loadUILogin(){
        return `        <div class="row content">
        <form action="/login" method="POST">
            <div class="col s12 m6 " >
                <div class="card z-depth-5 form-field" style="border-radius:10px">
                    <div class="card-action blue lighten-1 white-text center-align">
                        <div class="card-title">
                            <h4>Welcome to Awesomeshop</h4>
                        </div>
                        <p>Enter your email address and password <br>
                            to access to continue</p>
                        
                    </div>
                    <div class="card-content">
                        <div class="input-field">
                            <input type="text" id="email" name="email" >
                            <label for="email">Email Address</label>
                        </div>
                        <div class="input-field" id="usernamelog">
                        </div>
                        <div class="input-field">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password">
                        </div>
                        <div class="input-field" id="passwordlog">
                        </div>
                        <div class="input-field ">
                            <p>
                                <label>
                                <input type="checkbox" />
                                <span>Remember me</span>
                                </label>
                            </p>
                        </div>
                        <div class="input-field">
                            <button class="btn-large  blue lighten-1 waves-effect waves-dark" style="width: 100%; border-radius:10px">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <form action="/register" method="POST" id="Register">
            <div class="col s12 m6">
                <div class="card z-depth-5 form-field" style="border-radius:10px">
                    <div class="card-action blue lighten-1 white-text center-align">
                        <h4 >Sign Up for Free</h4>
                        <p>Don't have an account? Create your own <br>
                        account, it takes less than a minute</p>
                    </div>
                    <div class="card-content">
                        <div class="input-field" id="resultre">
                        </div>
                        <div class="input-field">
                            <input type="text" required id="usernamere" name="username" >
                            <label for="usernamere">Username</label>
                        </div>
                        <div class="input-field" id="uusername">
                        </div>
                        <div class="input-field">
                            <input type="text" required id="emailre" name="email" >
                            <label for="emailre">Email Address</label>
                        </div>
                        <div class="input-field" id="eemail">
                            
                        </div>
                        <div class="input-field">
                            <input type="password" required id="passwordre" name="password">
                            <label for="passwordre">Password</label>
                        </div>
                        <div class="input-field" id="ppassword">
                           
                        </div>
                        <div class="input-field">
                            <input type="password" id="confirmpasswordre" name="confirmpassword">
                            <label for="confirmpasswordre">Confirm Password</label>
                        </div>
                        <div class="input-field" id="pcpassword">
                            
                        </div>
                        <div class="input-field ">
                            <p>
                                <label>
                                <input type="checkbox" required name="check"/>
                                <span>I accept Terms and Condition</span>
                                </label>
                            </p>
                        </div>
                        <div class="input-field">
                            <button class="btn-large  blue lighten-1 waves-effect waves-dark" type="click" onclick="UILoginSigup.handleSignUp(event)" style="width: 100%; border-radius:10px">Sign up</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </form>
    </div>
    <footer class="page-footer grey grey darken-1" style="margin-top: -1%;padding-bottom: 1%;">
        <div class="container">
            <div class="footer-copy-right center-align ">
                2021 © Awesomeshop by Tom
           </div>
        </div>
    </footer>`
    }
    static validateDOM(value){
        
        return `<span class="grey white-text wave-dark col s12" style="padding:2%; margin-bottom:2%">${value}</span>`
    }
    static termsDOM(value){
        return `<span class="red lighten-1 white-text wave-dark col s12" style="padding:2%; margin-bottom:2%">${value}</span>`
    }
    static agreeDOM(value){
        return `<span class="green darken-1 white-text wave-dark col s12" style="padding:2%; margin-bottom:2%">${value}</span>`  
    }
    static reduceDOM(DOM){
        let dom = document.getElementById(DOM);
        dom.style.display="inline";
        return dom
    }
    static disagreeAllDOM(DOM,message){
        let dom = this.reduceDOM(DOM)
        dom.innerHTML = this.termsDOM(message)
        this.clearDOM(dom);
    }
    static agreeAllDOM(DOM,message){
        let dom = this.reduceDOM(DOM)
        dom.innerHTML = this.agreeAllDOM(message)
        this.clearDOM(dom);
    }
    static validateAllDom(DOM,message){
        let dom = this.reduceDOM(DOM);
        dom.innerHTML = this.validateDOM(message);
        this.clearDOM(dom);
    }
    static checkpassword(password,dom){
        let lowercase = new RegExp("^(?=.*[a-z])");
        let uppercase = new RegExp("^(?=.*[A-Z])");
        let numeric = new RegExp("^(?=.*[0-9])");
        let specialchar = new RegExp("^(?=.*[!@#$%^&*])");
        let length = new RegExp("^(?=.{8,})");
        if(!lowercase.test(password,dom)){
            this.validateAllDom(dom,"The password must contain at least 1 lowercase character")
            return false;
        }
        else if(!uppercase.test(password)){
            this.validateAllDom(dom,"The password must contain at least 1 uppercase character")
            return false;
        }
        else if(!numeric.test(password)){
            this.validateAllDom(dom,"The password must contain at least 1 numeric character")
            return false;
        }else if(!length.test(password)){
            this.validateAllDom(dom,"The password must contain 8 characters");
            return false;
        }
        return true;
    }
    static checkConfirmPassword(password,confirmpassword){
        console.log(confirmpassword,password)
        if(confirmpassword!=password){
            this.validateAllDom("pcpassword","Password mismatch");
            return false;
        }
        return true
    }
    static ValidateEmail(mail,dom) 
    {
        let checkEmail = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
            return (true)
        }
        this.validateAllDom(dom,"Email Invalid");
        return (false)
    }
    static checkUser(user){
        if(!user){
            this.validateAllDom("uusername","Username has been taken! Please change username")
            return false;
        }
        return true;
    }
    static checkEmail(email){
        if(!email){
            this.validateAllDom("eemail","Email already axisted");
            return false;
        }
        return true;
    }
    static handleSignIn(){
        
    }
    static async handleSignUp(event){
        event.preventDefault();
        let form = document.querySelector("#Register")
        let Form = new FormData(form);
        let dataSubmit={}
        for (const pair of Form) {
            dataSubmit[pair[0]]=pair[1];
        }
        console.log(dataSubmit);
        let pass = this.checkpassword(dataSubmit.password,"ppassword")
        let confpass = this.checkConfirmPassword(dataSubmit.password,dataSubmit.confirmpassword)
        let email = this.ValidateEmail(dataSubmit.email,"eemail");
        let checkuser={}
        if(email==true){
            await axios.post("/checkemail",dataSubmit).then(result=>{
                checkuser["email"]=result.data.email;
            }).catch(err=>{
                checkuser["email"] =err;
            })
            checkuser.email=this.checkEmail(checkuser.email)
            console.log(checkuser)
        }
        
        await axios.post("/checkuser",dataSubmit).then(result=>{
            checkuser["username"]=result.data.username;
        }).catch(err=>{
            checkuser["username"]=err;
        })
        checkuser.username = this.checkUser(checkuser.username);
        if(dataSubmit.check=="on"){
            if(checkuser.username&&checkuser.email&&confpass&&pass){
                await axios.post('/register',dataSubmit).then(
                    async(result)=>{
                        console.log(result.data)
                        let dom = document.getElementById("resultre");
                        dom.style.display="inline";
                        if(result.data.success){
                            dom.innerHTML=this.agreeDOM(`${dataSubmit.username} has been created`);
                            this.clearDOM(dom);
                        }
                        else{
                           dom.innerHTML=this.agreeDOM(`${dataSubmit.username} can't created`)
                        }
                    }
                ).catch(err=>{
                    console.log(err);
                })
            }
        }else{
            this.disagreeAllDOM("resultre","You haven't to agree terms and condition! Please check agreement");
        }
    }
    static clearDOM(value){
        setTimeout(()=>{
            value.style.display="none";
            value.style.innerHTML="";
        },3000)
    }
}

