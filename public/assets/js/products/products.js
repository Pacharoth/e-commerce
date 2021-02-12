class Product{
  static async productUI(){
    return ` <div class="card-panel">
    <div class="row">
     <div class=" bold flow-text card-title col s6">All Products in Stock</div>
     
     <button data-target="modal2" onclick="Product.modal()" class=" modal-trigger waves-effect waves-light btn-small blue lighten-1 right">Add product</button>
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
 
         <tbody id="ProductList">
         </tbody>
       </table>
     </div>
   </div>
   <!-- Modal Structure -->
   <div id="modal1" class="modal">
   <form action="" enctype="multipart/form-data" id="updateForm" onsubmit=Product.editProduct(event)>
   <div class="modal-content">
     <h3>Edit Product Name</h3>
     
         <div class="input-field">
           <input type="text" id="productValue" class="blue-text text-lighten-1" name="productname">
           <label for="productname">Product Name</label>
         </div>
         <div class="input-field">
           <input type="number" id="number" class="blue-text text-lighten-1" name="quantity">
           <label for="number">Quantity</label>
         </div>
         <div class="input-field">
           <input type="text" id="detail" class="blue-text text-lighten-1" name="description">
           <label for="detail">Description</label>
         </div>
         <div class="input-field">
         <input type="date" class="" name="date">
         <label for="date">Date</label>
         </div>
         <div class="input-field ">
         <label>Category</label>
         <select onchange="Product.handleChange()" id="selected">
           <option value="bags">Hand bags</option>
           <option value="electronic">Electronic</option>
           <option value="clothes">Clothes</option>
           <option value="wallets">Wallets</option>
          </select>
       </div>
   </div>
   <div class="modal-footer">
     <button type="button" class="modal-close waves-effect waves-red btn-floating btn-small red lighten-1"><i class="far fa-times-circle"></i></button>
     <button  class="btn-small btn-floating waves-effect waves-green" id="updateProduct" name="update"><i class="fas fa-check"></i></button>
   </div>
  </form>
   </div>
   <div id="modal2" class="modal">
     <form action="/product"   method="post" enctype="multipart/form-data" onsubmit=Product.addProduct(event) id="addProduct">
       <div class="modal-content">
         <h3>Add Product</h3>
         
         <div class="input-field">
           <input type="text" id="productname" class="blue-text text-lighten-1" name="productname">
           <label for="productname">Product Name</label>
         </div>
         <div class="input-field" id="Product">
         </div>
         <div class="input-field">
           <input type="number" id="quantity" class="blue-text text-lighten-1" name="quantity">
           <label for="quantity" class="">Quantity</label>
         </div>
         <div class="input-field">
           <input type="text" id="description" class="blue-text text-lighten-1" name="description" >
           <label for="description" class="text-blue lighten-1">Description</label>
         </div>
         <div>
         <label>Category</label>
         <select onchange="Product.handleChange()" id="select">
           <option value="bags">Hand bags</option>
           <option value="electronic">Electronic</option>
           <option value="clothes">Clothes</option>
           <option value="wallets">Wallets</option>
         </select>
         
       </div>
       <div class="input-field">
       <input type="date" id="date" class="" name="date">
       <label for="date">Date</label>
       </div>
         <div class="file-field input-field ">
           <div class="btn blue lighten-1">
             <span>Image</span>
             <input type="file" id="img" name="img">
           </div>
         
           <div class="file-path-wrapper">
             <input class="file-path validate" type="text" placeholder="Upload one or error">
           </div>
         </div>
         <div class="input-field" id ="image">
         </div>
         
       </div>
       <div class="modal-footer">
         <button class="modal-close waves-effect waves-red btn-floating btn-small red lighten-1"><i class="far fa-times-circle"></i></button>
         <button class=" btn-small btn-floating waves-effect waves-green"><i class="fas fa-check"></i></button>
       </div>
     </form>
     
   </div>
   
 `
  }
  static handleChange(event){
    console.log(getElById("select").value)
  }
  static modal(){
      $('.modal').modal();
      $('select').formSelect();
      
       
      
  }
  static navbar(){
      $('.sidenav').sidenav();
  }
  static formMultipleFile(domId){
    let form = selector(domId);
    let Form = new FormData(form);
    return Form;
  }
  static async addProduct(event){
    event.preventDefault();
    let img,pname;
    let dataSubmit = this.formMultipleFile("#addProduct");
    dataSubmit.getAll("img").forEach(result=>{
      let type = result.type
      if(type=="image/png"||type=="image/jpg"||
      type=="image/jpeg"||type=="image/bmp"||type=="image/webp"||type=="image/gif"){
        img = true;
      }else {
        let image = getElById('image')
        image.innerHTML=LoginSigup.agreeDOM('Invalid Image extension or Empty!')
        LoginSigup.clearDOM(image)
        img = false;
      }
    })
    
    
    dataSubmit.append('category',getElById('select').value)
    if(dataSubmit.get('productname')==""){
      pname=false
      let product = getElById('Product');
      product.innerHTML=LoginSigup.agreeDOM('Please Input Product Name')
      LoginSigup.clearDOM(product)
    }else{
      pname=true
    }
    if(img&&pname){
      await axios.post('/product',dataSubmit,{headers: {'content-type': 'multipart/form-data' }}).then(result=>{
        // console.log(result.data)
        this.addProductUI(result.data)
        this.clearForm();
        $('.modal').modal('close')
      }).catch(err=>{
        console.log("err")
      })
    }
  }
  static updateListProduct(result){
    const row = document.createElement("tr")
    row.innerHTML=this.listProduct(result)
    return row
  }
  static async editProduct(event){
    event.preventDefault()
    let Form = this.formMultipleFile("#updateForm")
    let id = getElById("updateProduct").value
    Form.append("category",getElById("selected").value)
    await axios.put('/product/'+id,Form).then(
      result=>{
        $('.modal').modal("close");
        let dom = getElById(id).parentElement.parentElement
        dom.replaceWith(this.updateListProduct(result.data))
        // console.log(result)
      }).catch(err=>{
        console.log("err")
      })
  }
  static async editProductUI(domId){
    $('.modal').modal();
    $('select').formSelect();
    let category=getElById("selected")
    let dom = getElById(domId).parentElement.parentElement.innerText.split("\t");
    await axios.get('/product/'+domId).then(result=>{
      setTimeout(()=>{category.value=res.category},1);
      let res = result.data
      
      getElById("productValue").value=res.pname;
      getElById("number").value=res.quantity;
      getElById("detail").value=res.detail;
      
      // let a = new Promise(()=>{
      //   category.value=res.value;
      // })
      // a.then(result=>category.value=res.value)
      // console.log(res.category)
    })
    getElById("updateProduct").value=domId
  }
  static async getProducts(){
    await axios.get('/products').then(result=>{
      let res = result.data
      // console.log(res)
      for (let i = 0; i <res.length; i++) {
        // console.log(res[i])
        this.addProductUI(res[i])
      }
    })
  }
  static async removeProduct(domID){
    await axios.delete('/product/'+domID).then(result=>{
      getElById(domID).parentElement.parentElement.remove()
    }).catch(err=>{
      console.log(err);
    })
    
  }
  static listProduct(product){
    
    return `
    <td><img class="materialboxed" src="${product.pic}" width=60></td>
    <td>${product.pname}</td>
    <td>${product.quantity}</td>
    <td>${product.detail}</td>
    <td>${new Date(product.instockAt).toDateString()}</td>
    <td>${product.category}</td>
    <td>
      <button data-target="modal1" onclick="Product.editProductUI(this.id)" class="btn-floating btn-small waves-effect waves-light modal-trigger" id="${product._id}"><i class="fas fa-edit"></i></button>
      <button class="btn-floating btn-small waves-effect waves-light  modal-trigger red lighten-2" onclick=Product.removeProduct(this.id) id="${product._id}"><i class="fas fa-minus"></i></button>
    </td>
  `
  }
  static addProductUI(product){
    const list = selector("#ProductList");
    const row=this.updateListProduct(product)
    list.prepend(row)
      
  }
  static clearForm(){
    let form = getElById("addProduct");
    form.reset();
  }
}
class ProductHomepage{
  static loadProductUIList(){
    return `                <div class="row">
          <div class="card-product">
          <div class="card">
              <div class="card-content">
                  
              <span class="card-title activator grey-text text-darken-4">Name<i class="material-icons right">more_vert</i></span>
              <div class="card-img waves-effect waves-block waves-light">
                  <img src="assets/img/1.jpeg" class="img1" alt="">
                  
              </div>
              <h4 class="center">15$</h4>
              <a href="" class=" btn-small waves-effect waves-light grey" style="width: 100%;"><i class="fas fa-shopping-cart"></i> Add to cart</a>

              </div>
              <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Name<i class="material-icons right">close</i></span>
              <p>Description</p>
              </div>
          </div>     
      </div>
    </div>`
  }
}