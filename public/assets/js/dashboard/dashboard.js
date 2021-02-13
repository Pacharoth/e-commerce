class Dashboard{
    static dashboardUI(){
        return `        <header>
        <nav>
            <div class="nav-wrapper white navigation">
                <a onclick="Dashboard.goHomepage()" class="brand-logo font-weight black-text">Awesome<span class="green-text text-darken-4">Shop</span></a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                <li><a href="sass.html" class="black-text"><i class="fas fa-question fa-sm"></i>Help</a></li>
                <li><a onclick="Dashboard.goToPageLogin()" class="black-text"><i class="fas fa-user-plus fa-sm" ></i>Join</a></li>
                </ul>
            </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html"><i class="fas fa-question"></i>Help</a></li>
            <li><a href="badges.html"><i class="fas fa-user-plus"></i>Join</a></li>
            <li><a href=""><i><img src="assets/img/gift-card.png" alt="" width="20" style="vertical-align: middle;"></i><span>Copon Saving</span></a></li>
            <li><a href=""><i class="fas fa-truck"></i> Free Delivery</a></li>
            <li><a href=""><i class="fas fa-gift"></i>Gift Voucher</a></li>
            <li><a href=""><i class="fas fa-laptop"></i> Electronics</a></li>
            <li><a href=""><i class="fas fa-shopping-bag"></i> Hand bags</a></li>
            <li><a href=""><i class="fas fa-wallet"></i> Wallets</a></li>
            <li><a href=""><i class="fas fa-tshirt"></i>Clothes</a></li>
        </ul>
    </header>

    <div class="carousel carousel-slider center">
        <div class="carousel-fixed-item">
            <div class="title">
                <h1 class=" font-weight font-h1 black-text">Shop your designer dresser</h1>
                <p class="flow-text text-grey font-p font-weight grey-text">Ready to wear dresses tailored for you from online. Hurry up while stock lasts.</p>
            </div>
        <form action="">
            <div class=" input-field center grey-text" id="input-search">
            <i class="fas fa-search prefix"></i>
                <input type="text" id="search">
                <label for="search">Search</label>
            </div>
        </form>
        </div>
        <div class="carousel-item red white-text clothes" href="#one!">
        </div>
        <div class="carousel-item amber white-text electronic" href="#two!">
        </div>
    </div>
    <div class="card-content-custom d-flex">
        <div class="card-body-custom d-flex" style="background-color: rgb(219, 100, 100);">
            <div class="card-text-custom " >
                <h5 class="title-card">Coupon Savings</h5>
                <p class="description-card">Up to 60% off everyday</p>
                <a href="">Shop Coupone</a>
            </div>
            <img src="assets/img/icons8-coupon-100.png" alt="">
        </div>
        <div class="card-body-custom d-flex" style="background-color: rgb(252, 149, 111);">
            <div class="card-text-custom ">
                <h5 class="title-card">Free Delivery</h5>
                <p class="description-card">With selected items</p>
                <a href="">Deliver Now</a>
            </div>
            <img src="assets/img/checked-truck.png" alt="" class="delivery-img">
        </div>
        <div class="card-body-custom d-flex" style="background-color: rgb(202, 75, 202);">
            <div class="card-text-custom">
                <h5 class="title-card">Gift Voucher</h5>
                <p class="description-card">With personal core items</p>
                <a href="">Gift Now</a>
            </div>
            <img src="assets/img/gift--v1.png" alt="" class="">
        </div>
    </div>
    <main class="d-flex">
        <div class="sidebar d-flex">
            <ul>
                <li><a href="" class="d-flex"><img src="assets/img/icon_laptop.png" alt=""><h5 style="margin-right:10%">Electronics</h5></a></li>
                <li ><a href="" class="d-flex"><img src="assets/img/icon_bag-front-view.png" alt=""><h5 style="margin-right:13%">Hand bags</h5></a></li>
                <li><a href="" class="d-flex"><img src="assets/img/icon_wallet.png" alt=""><h5 style="margin-right:24%">Wallets</h5></a></li>
                <li ><a href="" class="d-flex"><img src="assets/img/icon_clothes.png" alt=""><h5 style="margin-right:24%">Clothes</h5></a></li>
            </ul>
        </div>
        <div class="content-product">
            <div class="row" id="row">

            </div>
        </div>
    
    </main> `
    }
    static goHomepage(){
        document.title="AwesomeShop";
        history.pushState({},"AwesomeShop","/");
        getElById("row").innerHTML="";
        ProductHomepage.loadProductData();
    }
    static goToPageLogin(){
        document.title = "LoginPage";
        history.pushState({},"LoginPage","/login");
        routes();
    }
    static loadDashboardToRoot(){
        let rootelement = document.getElementById('root')
        rootelement.innerHTML=this.dashboardUI();
    }
    static async loadProductDetail(id){
        this.loadDashboardToRoot();
        this.loadCourselAndSidebar();
        getElById("row").innerHTML=this.contentProductDetail();
        ProductDetail.loadProductData(id)
    }
    static async handleCart(id){
        document.title="ProductDetail"
        history.pushState({},"ProductDetail","/productdetail?pid="+id);
        getElById("row").innerHTML="";
        getElById("row").innerHTML=this.contentProductDetail();
        ProductDetail.loadProductData(id);
      }
    static loadAllProduct(){
        this.loadDashboardToRoot();
        this.loadCourselAndSidebar();
        ProductHomepage.loadProductData();
    }
    static contentProduct(){
        return `<div class="card-product"></div>`
    }
    static contentProductDetail(){
        return `<div class="col s12 m12 l12" id="productdetail"></div>`
    }
    static loadCourselAndSidebar(){
        $(document).ready(function(){
            $('.sidenav').sidenav();
            });
            $(document).ready(function(){
            $('.carousel').carousel({
                fullWidth: true,
                indicators: true});
            });
        setTimeout(function(){$('.carousel').carousel('next')},3000)
    }
}