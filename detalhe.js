window.onload = () =>{
    let parametros = new URLSearchParams(window.location.search);
    let id = parametros.get("id");
    preencheDetalhes(id);
}


function preencheDetalhes(id){    
    url =  `https://diwserver.vps.webdock.cloud/products/${id}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(produto=>{
        console.log(produto)
        
        /*reating_icons = ''
        integerRate = Math.round(produto.rating.rate);
        for(let i=0; i<integerRate; i++){
            rating_icons += ``
        }
        for(let i=0; i<5-integerRate; i++){
            reating_icons += ``
        }*/
        
        product_detail=
            `<div class="produto">
            <img style="width:250px; height: 300px" src=${produto.image} alt="Teste">
            <h1>${produto.title}</h1>
            <p class="preco"><b>Preço:</b>${produto.price}</p>
            <p class="descricao"><b>Descrição:</b>${produto.description}</p>
            <p class="categoria"><b>Categoria:${produto.category}</b></p>
            <button class="comprar">Comprar</button>
            </div>`;
        
        document.getElementById('detalhe_produto').innerHTML = product_detail;
    })

}