
async function loadStyeAndScript(){
    var pathnode = "node_modules/";
    var location = window.location.origin+"/";
    console.log(location)
    const links = [location+pathnode+"@fortawesome/fontawesome-free/css/all.css", 
                    location+"assets/css/auth.css",
                    location+"assets/css/dashboard.css",
                    location+"assets/css/shop.css",
                    pathnode+"materialize-css/dist/css/materialize.css"];
    const scripts =[location+pathnode+"axios/dist/axios.js",
                    location+"assets/js/users/auth.js",
                    location+"assets/js/admin/admin.js",
                    location+"assets/js/dashboard/dashboard.js",
                    location+"assets/js/products/products.js",
                    location+"assets/js/history/history.js",
                    location+"assets/js/purchase/purchase.js",
                    location+"assets/js/products/productDetail.js",
                    location+"assets/js/users/user.js",
                    location+"assets/js/routes/routes.js",
                    ];
    let path=window.location.pathname
    for (let index=0;index<scripts.length;index++){
        let script = document.createElement("script")
        script.type="text/javascript";
        script.src=scripts[index]
        document.body.append(script)
    }
    for(let index=0;index<links.length;index++){
        let link=  document.createElement("link");
        link.rel="stylesheet";
        link.href=links[index];
        document.head.append(link);
        
    }

}
window.addEventListener("DOMContentLoaded",loadStyeAndScript);
function selector(dom){
    return document.querySelector(dom)
}
function getElById(domId){
    return document.getElementById(domId)
}
function serializer(domId){
    let form = selector(domId);
    let Form = new FormData(form);
    let dataSubmit={}
    for (const pair of Form) {
        dataSubmit[pair[0]]=pair[1];
    }
    return dataSubmit;
}
