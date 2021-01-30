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
                        <div class="input-field">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password">
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
                                <input type="checkbox" required/>
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
    static checkpassword(password){
        let lowercase = new RegExp("^(?=.*[a-z])");
        let uppercase = new RegExp("^(?=.*[A-Z])");
        let numeric = new RegExp("^(?=.*[0-9])");
        let specialchar = new RegExp("^(?=.*[!@#$%^&*])");
        let length = new RegExp("^(?=.{8,})");
        let rawpassword = document.getElementById("ppassword")
        if(!lowercase.test(password)){
            rawpassword.style.display="inline";
            rawpassword.innerHTML=this.validateDOM("The password must contain at least 1 lowercase character");
            this.clearDOM(rawpassword);
            return false;
        }
        else if(!uppercase.test(password)){
            rawpassword.style.display="inline";
            rawpassword.innerHTML=this.validateDOM("The password must contain at least 1 uppercase character");
            this.clearDOM(rawpassword);
            
            return false;
        }
        else if(!numeric.test(password)){
            rawpassword.style.display="inline";
            rawpassword.innerHTML=this.validateDOM("The password must contain at least 1 numeric character");
            this.clearDOM(rawpassword);
            return false;
        }else if(!length.test(password)){
            rawpassword.style.display="inline";
            rawpassword.innerHTML=this.validateDOM("The password must contain 8 characters");
            this.clearDOM(rawpassword);
            return false;
        }
        
        return true;
    }
    static checkConfirmPassword(password,confirmpassword){
        console.log(confirmpassword,password)
        if(confirmpassword!=password){
            let checkpassword = document.getElementById("pcpassword");
            checkpassword.style.display="inline";
            checkpassword.innerHTML=this.validateDOM("Password mismatch");
            this.clearDOM(checkpassword)
            return false;
        }
        return true
    }
    static ValidateEmail(mail) 
    {
        let checkEmail = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
            return (true)
        }
        let eemail = document.getElementById("eemail");
        eemail.innerHTML=this.validateDOM("Email Invalid");
        this.clearDOM(eemail)
        return (false)
    }
    static checkUser(user){
        let uusername = document.getElementById("uusername")
        if(!user){
            uusername.style.display="inline";
            uusername.innerHTML = this.validateDOM("Username has been taken! Please change username");
            this.clearDOM(uusername)
            return false;
        }
        return true;
    }
    static checkEmail(email){
        let eemail = document.getElementById("eemail")
        if(!email){
            eemail.style.display="inline";
            eemail.innerHTML = this.validateDOM("Email already axisted");
            this.clearDOM(eemail)
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
        let pass = this.checkpassword(dataSubmit.password)
        let confpass = this.checkConfirmPassword(dataSubmit.password,dataSubmit.confirmpassword)
        let email = this.ValidateEmail(dataSubmit.email);
        console.log(email)
        let checkuser={}
        if(email==true){
            await axios.post("/checkemail",dataSubmit).then(result=>{
                console.log(result)
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
        if(checkuser.username&&checkuser.email&&confpass&&pass){
            await axios.post('/register',dataSubmit).then(
                result=>{
                    console.log("success");
                }
            ).catch(err=>{
                console.log("error");
            })
        }
    }
    static clearDOM(value){
        setTimeout(()=>{
            value.style.display="none";
            value.style.innerHTML="";
        },3000)
    }
}

