
class LoginSigup{
    static loadUILoginSignUp(){
        return `        <div class="row content">
        <form action="/login" method="POST" id="Login" onsubmit=LoginSigup.handleSignIn(event)>
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
                        <div class="input-field" id="resultlog">
                        </div>
                        <div class="input-field">
                            <input type="text" id="email" name="email" >
                            <label for="email">Email Address</label>
                        </div>
                        <div class="input-field" id="emaillog">
                        </div>
                        <div class="input-field">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password">
                        </div>
                        <div class="input-field" id="passwordlog">
                        </div>
                        <div class="input-field">
                            <button class="btn-large  blue lighten-1 waves-effect waves-dark" style="width: 100%; border-radius:10px">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <form action="/register" method="POST" id="Register" onsubmit=LoginSigup.handleSignUp(event) >
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
                            <button class="btn-large  blue lighten-1 waves-effect waves-dark" style="width: 100%; border-radius:10px">Sign up</button>
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
        if(password==""){
            this.validateAllDom(dom,"Please insert password! Password require!")
        }
        else if(!lowercase.test(password,dom)){
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
        if(confirmpassword==""){
            this.validateAllDom("pcpassword","Please insert Confirm password! Confirm password is required!")
            return false;
        }
        else if(confirmpassword!=password){
            this.validateAllDom("pcpassword","Password mismatch");
            return false;
        }
        return true
    }
    static ValidateEmail(mail,dom) 
    {
        if(mail==""){
            this.validateAllDom(dom,"Please insert email! Email is required")
            return false
        }
        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
            return (true)
        }
        this.validateAllDom(dom,"Email Invalid");
        return (false);
    }
    static checkUserExisted(user){
        if(!user){
            this.validateAllDom("uusername","Username has been taken! Please change username")
            return false;
        }
        return true;
    }
    static checkUser(username){
        if(username==""){
            this.validateAllDom("uusername","Username is required");
            return false;
        }
    }
    static checkEmail(email){
        if(!email){
            this.validateAllDom("eemail","Email already axisted");
            return false;
        }
        return true;
    }
    static async handleSignIn(event){
        event.preventDefault();
        let dataSubmit = serializer("#Login")
        let checkemail = this.ValidateEmail(dataSubmit.email,"emaillog");
        let checkpassword = this.checkpassword(dataSubmit.password,"passwordlog")
        if(checkpassword&&checkemail){
            await axios.post('/login',dataSubmit).then(result=>{
                let respone=result.data
                console.log(respone)
                if(respone.user&&respone.password){
                    document.title = "Dashboard"
                    history.pushState({},"Dashboard","/admin")
                    routes();
                }
                else if(!respone.user){
                        let dom = document.getElementById("emaillog")
                        dom.style.display="inline";
                        dom.innerHTML=this.termsDOM("Can't find Email! Please try again!");
                        this.clearDOM(dom)
                }else if(!respone.email){
                        let dom = document.getElementById("passwordlog")
                        dom.style.display="inline";
                        dom.innerHTML=this.termsDOM("Wrong Password! Please try again!");
                        this.clearDOM(dom)
                }
            }).catch(err=>{
                let dom = document.getElementById("resultlog");
                dom.style.display="inline";
                dom.innerHTML=this.agreeDOM(`No ${dataSubmit.username}! Please try again`);
                this.clearDOM(dom);
            })
        }
        
    }
    static async handleSignUp(event){
        event.preventDefault();
        let dataSubmit=serializer("#Register");
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
        checkuser.username = this.checkUser(dataSubmit.username)
        await axios.post("/checkuser",dataSubmit).then(result=>{
            checkuser["username"]=result.data.username;
        }).catch(err=>{
            checkuser["username"]=err;
        })
        checkuser.username = this.checkUserExisted(dataSubmit.username);

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
                           dom.innerHTML=this.agreeDOM(`${dataSubmit.username} can't created`);
                           this.clearDOM(dom)
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

