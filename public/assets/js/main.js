
async function loadStyeAndScript(){
    var pathnode = "node_modules/";
    const links = [pathnode+"@fortawesome/fontawesome-free/css/all.css", 
                    "assets/css/auth.css",
                    pathnode+"materialize-css/dist/css/materialize.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"];
    const scripts =[pathnode+"axios/dist/axios.js",
                    "assets/js/users/users.js",
                    "assets/js/products/products.js",
                    "assets/js/routes/routes.js",
                    ];
    let path=window.location.pathname
    for (let index=0;index<scripts.length;index++){
        let script = document.createElement("script")
        script.type="text/javascript";
        
        script.src=scripts[index]
        // if(index!=0&&index!=2){
        //     document.body.append(script);
        // }else document.head.append(script)
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
    let form = selector(domId)
    let Form = new FormData(form);
    let dataSubmit={}
    for (const pair of Form) {
        dataSubmit[pair[0]]=pair[1];
    }
    return dataSubmit;
}
