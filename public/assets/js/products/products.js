class Product{
  static async productUI(){
    return ` <div class="card-panel">
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
 
         <tbody id="ProductList">
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
     <form action="" enctype="multipart/form-data" >
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
             <div class="input-field">
               <input type="text" id="category" class="blue-text text-lighten-1" name="category">
               <label for="category">Category</label>
             </div>
       </div>
       <div class="modal-footer">
         <button class="modal-close waves-effect waves-red btn-floating btn-small red lighten-1"><i class="far fa-times-circle"></i></button>
         <button  class="modal-close btn-small btn-floating waves-effect waves-green"><i class="fas fa-check"></i></button>
       </div>
     </form>
   </div>
   <div id="modal2" class="modal">
     <form action="/product"   method="post" enctype="multipart/form-data" onsubmit=Admin.addProduct(event) id="addProduct">
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
         <div class="input-field">
               <input type="text" id="category" class="blue-text text-lighten-1" name="category">
               <label for="category">Category</label>
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

   </div>`
  }
  static modal(){
      $('.modal').modal();
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
        img = false;
      }
    })
    if(dataSubmit.get('productname')==""){
      pname=false
      console.log(productname)
      let product = getElById('Product');
      product.innerHTML=LoginSigup.agreeDOM('Please Input Product Name')
    }else{
      pname=true
    }
    if(img&&pname){
      await axios.post('/product',dataSubmit,{headers: {'content-type': 'multipart/form-data' }}).then(result=>{
        console.log(result)
        this.clearForm();
        $('.modal').modal('close')
      }).catch(err=>{
        console.log("err")
      })
    }
  }
  static getProducts(){
  //   await axios.get('/poducts').then(result=>{

  //   })
  }
  static clearForm(){
    let form = getElById("addProduct");
    form.reset();
  }
}