class History{
    static async historyUI(){
        return ` <div class="card-panel">
        <div class="row">
         <div class=" bold flow-text card-title col s6">All History</div>
        </div>
         <div class="row">
           <table class="highlight responsive-table">
             <thead>
               <tr>
                   <th>No</th>
                   <th>Customer's Name</th>
                   <th>Product's Name</th>
                   <th>Purchase's Date</th>
               </tr>
             </thead>
     
             <tbody id="historyList">
             </tbody>
           </table>
         </div>
       </div>
      
    `
    }

}