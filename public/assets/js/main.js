async function loadStyeAndScript(){
    var pathnode = "node_modules/";
    const links = [pathnode+"bootstrap/dist/css/bootstrap.css"];
    const scripts =[pathnode+"axios/dist/axios.js",
                    "assets/js/users/users.js",
                    "assets/js/products/products.js",
                    pathnode+"bootstrap/dist/js/bootstrap.js"
                    ,"assets/js/routes/routes.js"];
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


