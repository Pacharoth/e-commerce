async function loadStyeAndScript(){
    var pathnode = "node_modules/";
    const links = [pathnode+"@fortawesome/fontawesome-free/css/all.css", 
                    "assets/css/auth.css",
                    pathnode+"materialize-css/dist/css/materialize.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"];
    const scripts =[pathnode+"axios/dist/axios.js",
                    pathnode+"materialize-css/dist/js/materialize.min.js",
                    "assets/js/users/users.js",
                    "assets/js/products/products.js",
                    "assets/js/routes/routes.js"];
    for (let index=0;index<scripts.length;index++){
        let script = document.createElement("script")
        script.type="text/javascript"
        script.src=scripts[index]
        document.body.append(script);
    }
    for(let index=0;index<links.length;index++){
        let link=  document.createElement("link");
        link.rel="stylesheet";
        link.href=links[index];
        document.head.append(link);
    }
}
loadStyeAndScript();


