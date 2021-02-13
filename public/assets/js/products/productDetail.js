class ProductDetail{
    static loadProduct(){
        return `<div class="col s12 m12 l12">        
        <div class="card hide-on-small-only horizontal">
            <div class="card-img ">
                <img src="https://materializecss.com/images/office.jpg" class="big-img">

                <div class="content-img-chart d-flex">
                    <a class="card-image blue lighten-1">
                        <img src="https://materializecss.com/images/office.jpg" class="img">
                    </a>
                    <a class="card-image blue lighten-1">
                        <img src="https://materializecss.com/images/office.jpg" class="img">
                    </a>
                    <a class="card-image blue lighten-1">
                        <img src="https://materializecss.com/images/office.jpg" class="img">
                    </a> 
                    <button class="btn-floating waves-effect waves-light blue lighten-1 position-img">20%</button>
                </div>
                
            </div>

          <div class="card-stacked">
            <div class="card-content">
                <span class="card-title">Name</span>
              <p>Description</p>
              <div class="input-field col m7">
                  <input type="number">
                  <label for="">quantity</label>
              </div>
              <button class="btn waves-effect waves-light col s12 m12 l12 sticky-bottom"><i class="fas fa-shopping-cart"></i> Add to cart</button>
            </div>

          </div>
        </div>
        <div class="card hide-on-med-and-up show-on-small">
            <div class="card-content">
                <div class="card-image">
                    <img src="https://materializecss.com/images/office.jpg" class="big-img">

                    <div class="content-img-chart d-flex">
                        <a class="card-image blue lighten-1">
                            <img src="https://materializecss.com/images/office.jpg" class="img">
                        </a>
                        <a class="card-image blue lighten-1">
                            <img src="https://materializecss.com/images/office.jpg" class="img">
                        </a>
                        <a class="card-image blue lighten-1">
                            <img src="https://materializecss.com/images/office.jpg" class="img">
                        </a> 
                        <button class="btn-floating waves-effect waves-light blue lighten-1 position-img">20%</button>
                    </div>
                </div>
              <div class="card-title">Title</div>
              <div class="input-field">
                  <input type="number" name="quantity">
                  <label for="quantity">Quantity</label>
              </div>
              <a class="btn waves-effect waves-light grey " style="width: 100%;"><i class="fas fa-shopping-cart"></i> Add to cart </a>

            </div>
        </div>
        <h3>Comment</h3>
        <div class="card">
            <div class="card-content row valign-wrapper">
                <div class="col s2 m1">
                    <img src="https://materializecss.com/images/yuna.jpg" class="circle avatar-custom"  alt="">
                </div>
                <div class="col s10 m11">
                    <span class="card-title">Name</span>
                    <p>Date</p>
                </div>
            </div>
            <div class="card-action">
                <p>Description</p>
            </div>
        </div>
        <div class="card">
            <div class="card-content row">
                    <form class="col s12">
                        <div class="input-field col s10">
                          <input type="text" class="materialize-textarea" data-length="250" />
                          <label >Comment</label>
                        </div>
                        <div class="input-field col s2">
                            <button class="btn waves-effect waves-light" type="submit" name="action">send
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
            </div>
        </div>
    </div>`
    }
    static loadProductDetail(product){
        let productPrice = parseFloat(product.price*0.8).toFixed(2);
        return `<div class="card hide-on-small-only horizontal">
        <div class="card-img ">
            <img src="${product.pic}" class="big-img">

            <div class="content-img-chart d-flex">
                <a class="card-image blue lighten-1">
                    <img src="${product.pic}" class="img">
                </a>
                <a class="card-image blue lighten-1">
                    <img src="${product.pic}" class="img">
                </a>
                <a class="card-image blue lighten-1">
                    <img src="${product.pic}" class="img">
                </a> 
                <button class="btn-floating waves-effect waves-light blue lighten-1 position-img">20%</button>
            </div>
            
        </div>

      <div class="card-stacked">
        <div class="card-content">
            <span class="card-title">${product.pname}</span>
            <p class="font-weight" style="font-size:1.17em">${productPrice}</p>

          <p >${product.detail}</p>
          <div class="input-field col m7">
              <input type="number">
              <label for="">quantity</label>
          </div>
          <button class="btn waves-effect waves-light col s12 m12 l12 sticky-bottom"><i class="fas fa-shopping-cart"></i> Add to cart</button>
        </div>

      </div>
    </div>
    <div class="card hide-on-med-and-up show-on-small">
        <div class="card-content">
            <div class="card-image">
                <img src="${product.pic}" class="big-img">

                <div class="content-img-chart d-flex">
                    <a class="card-image blue lighten-1">
                        <img src="${product.pic}" class="img">
                    </a>
                    <a class="card-image blue lighten-1">
                        <img src="${product.pic}" class="img">
                    </a>
                    <a class="card-image blue lighten-1">
                        <img src="${product.pic}" class="img">
                    </a> 
                    <button class="btn-floating waves-effect waves-light blue lighten-1 position-img">20%</button>
                </div>
            </div>
            <div class="card-title">${product.pname}</div>
            <p class="font-weight" style="font-size:1.17em">${productPrice}</p>
            <div class="input-field">
                <input type="number" name="quantity">
                <label for="quantity">Quantity</label>
            </div>
            <a class="btn waves-effect waves-light grey " style="width: 100%;"><i class="fas fa-shopping-cart"></i> Add to cart </a>

        </div>
    </div>`
    }
    static async loadProductData(id){
        await axios.get("product/"+id).then(result=>{
            
        })  
    }
    static commentSession(){

    }
}