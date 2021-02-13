
async function loadStyeAndScript(){
    var pathnode = "node_modules/";
    const links = [pathnode+"@fortawesome/fontawesome-free/css/all.css", 
                    "assets/css/auth.css",
                    "assets/css/dashboard.css",
                    "assets/css/shop.css",
                    pathnode+"materialize-css/dist/css/materialize.css"];
    const scripts =[pathnode+"axios/dist/axios.js",
                    "assets/js/users/auth.js",
                    "assets/js/admin/admin.js",
                    "assets/js/dashboard/dashboard.js",
                    "assets/js/products/products.js",
                    "assets/js/history/history.js",
                    "assets/js/purchase/purchase.js",
                    "assets/js/products/productDetail.js",
                    "assets/js/users/user.js",
                    "assets/js/routes/routes.js",
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
