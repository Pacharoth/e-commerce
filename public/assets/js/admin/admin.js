class AdminUI{
    static AdminPage(){
        return `      <header>
        <nav>
          <div class="nav-wrapper blue lighten-1">
            <a href="#!" class="brand-logo white-text text-darken-4" style="font-size:1.5rem; margin-left: 2%;">Awesome shop</a>
            <a href="#" data-target="sidebar" onclick="Admin.navbar()" class="sidenav-trigger" ><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html">Home</a></li>
              <li><a href="badges.html">logout</a></li>
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
            <a href=""><img class="circle" src="assets/img/download.png"></a>
            <a href=""><span class="white-text name">John Doe</span></a>
            <a href=""><span class="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li>
          <a href="" class="waves-effect waves-teal"><i class="fab fa-product-hunt fa-lg"></i>Products</a>
        </li>
        <li>
          <a href="" class="waves-effect waves-teal"><i class="fas fa-user fa-lg"></i>User</a>
        </li>
        <li>
          <a href="" class="waves-effect waves-teal"><i class="fas fa-shopping-cart fa-lg"></i>Purchase Order</a>
        </li>
        <li>
          <a href="" class="waves-effect waves-teal"><i class="fas fa-history fa-lg"></i>History</a>
        </li>
      </ul>
      <ul class="sidenav" id="sidebar">
        <li >
          <div class="user-view">
            <div class="background">
              <img src="https://materializecss.com/images/office.jpg" alt="">
            </div>
            <a href=""><img class="circle" src="assets/img/download.png"></a>
            <a href=""><span class="white-text name">John Doe</span></a>
            <a href=""><span class="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li><a href="sass.html"><i class="fas fa-home"></i>Home</a></li>
        <li><a href="badges.html"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
      </ul>
        <main id="loadpage">
        </main> `
    
    }
    static async loadPage(){
        let path =window.location.pathname
        if(path=="/admin"){
            getElById('loadpage').innerHTML=await Product.productUI();
        }
    }
  }