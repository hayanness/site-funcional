window.onload = () => {
    
    carregarProdutos();

};


function carregarProdutos(){
    fetch('https://diwserver.vps.webdock.cloud/products')
    .then(res=>res.json())
    .then(dados => {
        console.log(dados)
        produtos = '';

        for(let i = 0; i < dados.products.length; i++){
            produtos += `
            <div class="box">
                <img src=${dados.products[i].image} alt="img5">
                <h4>R$${dados.products[i].price}</h4>
                <p>${dados.products[i].title}</p>
                <a href="detalhe.html?id=${dados.products[i].id}">Detalhe</a>
                <div class="carrinho">
                    <a href="#"><i class='bx bxs-cart'></i></a>
                </div>
            </div>
            `
        }   


        document.getElementById('container-produtos').innerHTML = produtos;
    }) 
}

function pesquisar(){
    texto = document.getElementById('busca').value;

    fetch(`https://diwserver.vps.webdock.cloud/products/search?query=${texto}`)
    .then(res=>res.json())
    .then(dados => {
        console.log(dados)
        produtos = '';

        for(let i = 0; i < dados.length; i++){
            produtos += `
            <div class="box">
                <img src=${dados[i].image} alt="img5">
                <h4>R$${dados[i].price}</h4>
                <p>${dados[i].title}</p>
                <a href="detalhe.html?id=${dados[i].id}">Detalhe</a>
                <div class="carrinho">
                    <a href="#"><i class='bx bxs-cart'></i></a>
                </div>
            </div>
            `
        }   

        document.getElementById('container-produtos').innerHTML = produtos;
    })
}
  