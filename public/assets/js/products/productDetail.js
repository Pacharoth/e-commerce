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
                <div class="col s2 m2 lg2">
                    <img src="https://materializecss.com/images/yuna.jpg" class="circle avatar-custom"  alt="">
                </div>
                <div class="col s10 m10 lg10">
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
                    <form action="/comment" method="POST" class="col s12">
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
        let location=window.location.origin+"/";
        let productPrice = parseFloat(product.price*0.8).toFixed(2);
        return `<div class="card hide-on-small-only horizontal">
        <div class="card-img ">
            <img src="${location+product.pic}" class="big-img">

            <div class="content-img-chart d-flex">
                <a class="card-image blue lighten-1">
                    <img src="${location+product.pic}" class="img">
                </a>
                <a class="card-image blue lighten-1">
                    <img src="${location+product.pic}" class="img">
                </a>
                <a class="card-image blue lighten-1">
                    <img src="${location+product.pic}" class="img">
                </a> 
                <button class="btn-floating waves-effect waves-light blue lighten-1 position-img">20%</button>
            </div>
            
        </div>

      <div class="card-stacked">
        <div class="card-content">
            <span class="card-title">${product.pname}</span>
            <p class="font-weight" style="font-size:1.17em">${productPrice}$</p>

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
                <img src="${location+product.pic}" class="big-img">

                <div class="content-img-chart d-flex">
                    <a class="card-image blue lighten-1">
                        <img src="${location+product.pic}" class="img">
                    </a>
                    <a class="card-image blue lighten-1">
                        <img src="${location+product.pic}" class="img">
                    </a>
                    <a class="card-image blue lighten-1">
                        <img src="${location+product.pic}" class="img">
                    </a> 
                    <button class="btn-floating waves-effect waves-light blue lighten-1 position-img">20%</button>
                </div>
            </div>
            <div class="card-title">${product.pname}</div>
            <p class="font-weight" style="font-size:1.17em">${productPrice}$</p>
            <div class="input-field">
                <input type="number" name="quantity">
                <label for="quantity">Quantity</label>
            </div>
            <a class="btn waves-effect waves-light grey " style="width: 100%;"><i class="fas fa-shopping-cart"></i> Add to cart </a>

        </div>
    </div>`
    }
    static getCommentUI(comment){
        return`<div class="card-content row valign-wrapper">
        <div class="col s2 m2 lg2">
            <img src="https://materializecss.com/images/yuna.jpg" class="circle avatar-custom"  alt="">
        </div>
        <div class="col s10 m10 lg10">
            <span class="card-title">${comment.user.username}</span>
            <p>${comment.DateComment}</p>
        </div>
        </div>
        <div class="card-action">
            <p>${comment.comment}</p>
        </div>`
    }
    static createComment(comment){
        let commentcard = document.createElement("div");
        commentcard.className="card"
        commentcard.innerHTML = this.getCommentUI(comment);
        return commentcard
    }
    static commentFormDOM(){
        let commentFORM = document.createElement("div");
        commentFORM.className="card";
        commentFORM.innerHTML=this.commentUI();
        return commentFORM
    }
    static appendProductInView(product){
        let productdetial = getElById("productdetail")
        let h3 = document.createElement("h3");
        h3.innerHTML="Comment";
        productdetial.innerHTML=this.loadProductDetail(product);
        productdetial.appendChild(h3);
        productdetial.appendChild(this.commentFormDOM());
        this.getComment();

    }
    static async getComment(){
        let search = new URLSearchParams(window.location.search)
        let id=search.get("pid");
        let form = new FormData();
        form.append("pid",id)
        await axios.get('comment/'+id).then(result=>{
            // console.log(result)
            for(let i =0;i<result.data.length;i++){
                // console.log(result.data[i])
                getElById("productdetail").insertBefore(this.createComment(result.data[i]),getElById("comment").parentElement.parentElement)
            }
        })
    }
    static async loadProductData(id){
        await axios.get("product/"+id).then(result=>{
            this.appendProductInView(result.data)
        })  
    }
    static commentUI(){
        return `<div class="card-content row">
        <form id="comment" action="/comment" onsubmit="ProductDetail.handleComment(event)" method="POST" class="col s12">
            <div class="input-field col s10">
              <input type="text" id="clearInput" name="comment" class="materialize-textarea" data-length="250" />
              <label >Comment</label>
            </div>
            <div class="input-field col s2">
                <button class="btn waves-effect waves-light" type="submit" name="action">send
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </form>
        </div>`
    }
    static async handleComment(event){
        event.preventDefault();
        let session;
        let search = new URLSearchParams(window.location.search)
        let id=search.get("pid")
        // console.log(id);
        let Form = new FormData(selector("#comment"));
        Form.append("pid",id);
        await axios.post("/session").then(result=>{
            session=result.data;
        }).catch(err=>{session=false;})
        if(session.session){
            await axios.post('/comment',Form).then(result=>{
                // console.log(result.data);
                // let result=result.data
                // console.log(getElById("comment").parentElement.parentElement)
                getElById("productdetail").insertBefore(this.createComment(result.data),getElById("comment").parentElement.parentElement)
                getElById("clearInput").value=""
                // console.log(getElById("comment").parentElement.className)

            }).catch(err=>{
                console.log(err);
            })
        }else{
            document.title="LoginPage";
            history.pushState({},"LoginPage","/login");
            routes();
        }
    }
}