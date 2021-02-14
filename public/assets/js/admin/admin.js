class AdminUI{
    static AdminPage(){
      let location = window.location.origin+"/";
        return `      <header class="header">
        <nav>
          <div class="nav-wrapper blue lighten-1">
            <a  onclick ="AdminUI.goHomepage()" class="brand-logo white-text text-darken-4" style="font-size:1.5rem; margin-left: 2%;">Awesome shop</a>
            <a href="#" data-target="sidebar" onclick="Product.navbar()" class="sidenav-trigger" ><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a  onclick =AdminUI.goHomepage()>Home</a></li>
              <li><a onclick="AdminUI.logoutPage()">logout</a></li>
            </ul>
          </div>
        </nav>  
      </header>
      <ul id="mobile-demo" class="sidenav sidenav-fixed">
        <li >
          <div class="user-view">
            <div class="background">
              <img src="https://materializecss.com/images/office.jpg" alt="">
            </div>
            <a><img class="circle" src="${location}assets/img/download.png"></a>
            <a><span class="white-text name" id="username">John Doe</span></a>
            <a ><span class="white-text email" id="email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li>
        <a id="product" onclick="AdminUI.handleProduct()" class="waves-effect waves-teal product"><i class="fab fa-product-hunt fa-lg"></i>Product</a>
       </li>
        <li>
          <a id="user" onclick="AdminUI.handleUser()" class="waves-effect waves-teal user"><i class="fas fa-user fa-lg"></i>User</a>
        </li>
        <li>
          <a id="purchase" onclick="AdminUI.handlePurchase()" class="waves-effect waves-teal"><i class="fas fa-shopping-cart fa-lg"></i>Purchase Order</a>
        </li>
        <li>
          <a id="history" onclick="AdminUI.handleHistory()" class="waves-effect waves-teal"><i class="fas fa-history fa-lg"></i>History</a>
        </li>
      </ul>
      <ul class="sidenav" id="sidebar">
        <li >
          <div class="user-view">
            <div class="background">
              <img src="https://materializecss.com/images/office.jpg" alt="">
            </div>
            <a href=""><img class="circle" src="${location}assets/img/download.png"></a>
            <a href=""><span class="white-text name">John Doe</span></a>
            <a href=""><span class="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li>
        <a id="product" onclick="AdminUI.handleProduct()" class="waves-effect waves-teal product"><i class="fab fa-product-hunt fa-lg"></i>Product</a>
       </li>
        <li>
         <a id="user" onclick="AdminUI.handleUser()" class="waves-effect waves-teal user"><i class="fas fa-user fa-lg"></i>User</a>
        </li>
       
        <li>
          <a id="purchase" onclick="AdminUI.handlePurchase()" class="waves-effect waves-teal"><i class="fas fa-shopping-cart fa-lg"></i>Purchase Order</a>
        </li>
        <li>
          <a id="history" onclick="AdminUI.handleHistory()" class="waves-effect waves-teal"><i class="fas fa-history fa-lg"></i>History</a>
        </li>
        <li><a onclick =AdminUI.goHomepage() ><i class="fas fa-home fa-lg"></i>Home</a></li>
        <li><a onclick=AdminUI.logoutPage()><i class="fas fa-sign-out-alt fa-lg"></i>Logout</a></li>
      </ul>
        <main id="loadpage" class="main">
        </main> `
    
    }
    
    static async handleState(...args){
      this.changeButtonLinkToWhite(args[0],args[1]);
      this.changeButtonLinkToBlack(args[2],args[3]);     
      this.changeButtonLinkToBlack(args[4],args[5])
      this.changeButtonLinkToBlack(args[6],args[7])
    }
    static async changeButtonLinkToBlack(button,icon){
      selector(button).className="waves-effect waves-teal";
      selector(icon).style.color = "";
    }
    static async handlePurchase(){
      this.handleState("#purchase",".fa-shopping-cart","#history",".fa-history",
                        "#user",".fa-user","#product",".fa-product-hunt");
      getElById('loadpage').innerHTML= await PurchaseOrder.PurchaseOrderUI()
    }
    static async handleHistory(){
      this.handleState("#history",".fa-history","#purchase",".fa-shopping-cart"
                        ,"#user",".fa-user","#product",".fa-product-hunt");
      getElById('loadpage').innerHTML=await History.historyUI();
    }
    static async handleProduct(){
      this.handleState("#product",".fa-product-hunt"
      ,"#purchase",".fa-shopping-cart","#user",".fa-user","#history",".fa-history");
      getElById('loadpage').innerHTML=await Product.productUI();
      Product.getProducts();
    }
    static async handleUser(){
      this.handleState("#user",".fa-user","#product",".fa-product-hunt"
      ,"#purchase",".fa-shopping-cart","#history",".fa-history");
      getElById('loadpage').innerHTML=await User.UserUI();

    }
    static changeUsernameEmail(username,email){
      getElById("username").innerHTML = username;
      getElById("email").innerHTML = email;
    }
    static changeButtonLinkToWhite(button,icon){
      selector(button).className="waves-effect waves-teal white-text blue lighten-1";
      selector(icon).style.color = "white";
      
    }
    static async goHomepage(){
      document.title="AwesomeShop"
      history.pushState({},"Awesome","/");
      routes();
    }
    static async loadPage(){
        let path =window.location.pathname
        if(path.indexOf("/admin")>-1){
            if(path=="/admin"){
              getElById('loadpage').innerHTML=await Product.productUI();
              Product.getProducts();
              this.changeButtonLinkToWhite("#product",".fa-product-hunt")  
            }
        }
    }
    static async logoutPage(){
      await axios.get('/logout').then(result=>{
        history.pushState({},"Logout","/logout")
        routes();
      })
    }
}