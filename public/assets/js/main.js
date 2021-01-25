var pathnode = "node_modules/";
const scripts =[pathnode+"axios/dist/axios.js",
                "assets/js/users/users.js",
                "assets/js/products/products.js"];
for (let index=0;index<scripts.length;index++){
    let script = document.createElement("script")
    script.src=scripts[index]
    script.type="text/javascript"
    document.body.append(script);
}
