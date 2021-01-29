function routes(){
    if(window.location.pathname=='/'){
        const dom = document.createElement('a')
        document.body.appendChild(dom)
    }
    else{
        const nah = document.createElement('p');
        document.body.appendChild(nah)
    }
}
routes();