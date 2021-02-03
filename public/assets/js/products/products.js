class Admin{
    static loadUIProduct(){
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
        <main>
          <div class="card-panel">
           <div class="row">
            <div class=" bold flow-text card-title col s6">All Products in Stock</div>
            
            <button data-target="modal2" onclick="Admin.modal()" class=" modal-trigger waves-effect waves-light btn-small blue lighten-1 right">Add product</button>
           </div>
            <div class="row">
              <table class="highlight responsive-table">
                <thead>
                  <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Detail</th>
                      <th>In Stock At</th>
                      <th>Category</th>
                      <th>Action</th>
                  </tr>
                </thead>
        
                <tbody>
                  <tr>
                    <td>clothes photo</td>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Detail</td>
                    <td>Date</td>
                    <td>Type</td>
                    <td>
                      <button data-target="modal1" onclick="Admin.modal()" class="btn-floating btn-small waves-effect waves-light modal-trigger "><i class="fas fa-edit"></i></button>
                      <button class="btn-floating btn-small waves-effect waves-light  modal-trigger red lighten-2"><i class="fas fa-minus"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Modal Structure -->
          <div id="modal1" class="modal">
            <form action="">
              <div class="modal-content">
                <h3>Edit Product Name</h3>
                
                    <div class="input-field">
                      <input type="text" id="productname" class="blue-text text-lighten-1" name="productname">
                      <label for="productname">Product Name</label>
                    </div>
                    <div class="input-field">
                      <input type="number" id="quantity" class="blue-text text-lighten-1" name="quantity">
                      <label for="quantity">Quantity</label>
                    </div>
                    <div class="input-field">
                      <input type="text" id="description" class="blue-text text-lighten-1" name="description">
                      <label for="description">Description</label>
                    </div>
              </div>
              <div class="modal-footer">
                <button class="modal-close waves-effect waves-red btn-floating btn-small red lighten-1"><i class="far fa-times-circle"></i></button>
                <button  class="modal-close btn-small btn-floating waves-effect waves-green"><i class="fas fa-check"></i></button>
              </div>
            </form>
          </div>
          <div id="modal2" class="modal">
            <form action="">
              <div class="modal-content">
                <h3>Add Product</h3>
                <div class="input-field">
                  <input type="text" id="productname" class="blue-text text-lighten-1" name="productname">
                  <label for="productname">Product Name</label>
                </div>
                <div class="input-field">
                  <input type="number" id="quantity" class="blue-text text-lighten-1" name="quantity">
                  <label for="quantity" class="">Quantity</label>
                </div>
                <div class="input-field">
                  <input type="text" id="description" class="blue-text text-lighten-1" name="description" >
                  <label for="description" class="text-blue lighten-1">Description</label>
                </div>
                <div class="file-field input-field ">
                  <div class="btn blue lighten-1">
                    <span>Image</span>
                    <input type="file" >
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one or error">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="modal-close waves-effect waves-red btn-floating btn-small red lighten-1"><i class="far fa-times-circle"></i></button>
                <button class="modal-close btn-small btn-floating waves-effect waves-green"><i class="fas fa-check"></i></button>
              </div>
            </form>

          </div>
        </main> `
    }
    static modal(){
        $('.modal').modal();
        let modal = selector('.modal')
        modal.style.overflowY="hidden";
    }
    static navbar(){
        $('.sidenav').sidenav();
    }
    
}