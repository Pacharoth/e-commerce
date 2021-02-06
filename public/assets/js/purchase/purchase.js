class PurchaseOrder{
    static async PurchaseOrderUI(){
        return ` <div class="card-panel">
        <div class="row">
         <div class=" bold flow-text card-title col s6">All Purchase and Order</div>
        </div>
         <div class="row">
           <table class="highlight responsive-table">
             <thead>
               <tr>
                   <th>No</th>
                   <th>Customer</th>
                   <th>Product's image</th>
                   <th>Product's Name</th>
                   <th>Price</th>
               </tr>
             </thead>
     
             <tbody id="PurchaseList">
             </tbody>
           </table>
         </div>
       </div>

    `
    }

}