class User{
    static async UserUI(){
        return ` <div class="card-panel">
        <div class="row">
         <div class=" bold flow-text card-title col s6">All Admin and User</div>
         
         <button data-target="modal2" onclick="Product.modal()" class=" modal-trigger waves-effect waves-light btn-small blue lighten-1 right">Add user</button>
        </div>
         <div class="row">
           <table class="highlight responsive-table">
             <thead>
               <tr>
                   <th>No</th>
                   <th>Username</th>
                   <th>Email</th>
                   <th>role</th>
                   <th>Create At</th>
               </tr>
             </thead>
     
             <tbody id="UserList">
             </tbody>
           </table>
         </div>
       </div>
       <!-- Modal Structure -->
       <div id="modal1" class="modal">
       <form action="" enctype="multipart/form-data" id="updatePassword">
       <div class="modal-content">
         <h3>Change Password</h3>
         
             <div class="input-field">
               <input type="password" id="product" class="blue-text text-lighten-1" name="password">
               <label for="password">Product Name</label>
             </div>
             <div class="input-field">
               <input type="password" id="confirmpassword" class="blue-text text-lighten-1" name="confirmpassword">
               <label for="confirmpassword"></label>
             </div>
       </div>
       <div class="modal-footer">
         <button type="button" class="modal-close waves-effect waves-red btn-floating btn-small red lighten-1"><i class="far fa-times-circle"></i></button>
         <button  class="btn-small btn-floating waves-effect waves-green" id="updateProduct" name="update"><i class="fas fa-check"></i></button>
       </div>
      </form>
       </div>
       <div id="modal2" class="modal">
         <form action="/product"   method="post" enctype="multipart/form-data" id="addUser">
           <div class="modal-content">
             <h3>Add User</h3>
             
             <div class="input-field">
               <input type="text" id="username" class="blue-text text-lighten-1" name="username">
               <label for="username">Username</label>
             </div>
             <div class="input-field" id="uusername">
             </div>
             <div class="input-field">
               <input type="email" id="email" class="blue-text text-lighten-1" name="email">
               <label for="email" class="">Email</label>
             </div>
             <div class="input-field">
               <input type="password" id="password" class="blue-text text-lighten-1" name="password" >
               <label for="password" class="text-blue lighten-1">Password</label>
             </div>
             <div class="input-field">
                   <input type="text" id="confirmpassword" class="blue-text text-lighten-1" name="confirmpassword">
                   <label for="confirmpassword">Confirm Password</label>
             </div>
           </div>
           <div class="modal-footer">
             <button class="modal-close waves-effect waves-red btn-floating btn-small red lighten-1"><i class="far fa-times-circle"></i></button>
             <button class=" btn-small btn-floating waves-effect waves-green"><i class="fas fa-check"></i></button>
           </div>
         </form>
    
       </div>`
    }
    
}