const botao = document.getElementById('burguer');
const menu = document.getElementById('menu');
const produtos = document.getElementById('produtos')
const pesquisar = document.getElementById('pesquisa input')

const inputProduto = document.getElementById('produto')
const inputPreco = document.getElementById('preco')

let popup = document.getElementById("popup")
function abrirCarrinho() {
    popup.style.display = "flex"
}

popup.addEventListener('click', event => {
    const nomeDoElementoClicado = event.target.classList[0]
    if (nomeDoElementoClicado === "popup-fundo") {
        popup.style.display = "none"
    }
})

let listaProdutos = [
    { nome: 'Nike SB Dunk High', imagem: './imagens/tenis 1.webp', preco: 1500, quantidade: 0 },
    { nome: 'Women Air Force', imagem: './imagens/tenis 2.webp', preco: 2000, quantidade: 0 },
    { nome: 'Nike Air Max Penny', imagem: './imagens/tenis 3.webp', preco: 1000, quantidade: 0 },
    { nome: 'Nike Air Jordam 4 Retro', imagem: './imagens/tenis 4.webp', preco: 1500, quantidade: 0 },
    { nome: 'Off-White x Air Force 1', imagem: './imagens/tenis 5.webp', preco: 3000, quantidade: 0 },
    { nome: 'Toy Car-Themed', imagem: './imagens/tenis 6.webp', preco: 1500, quantidade: 0 },
    { nome: 'Nike VaporMax', imagem: './imagens/tenis 7.webp', preco: 1000, quantidade: 0 },
    { nome: 'Nike Air Jordan 1 Mid', imagem: './imagens/tenis 8.webp', preco: 1000, quantidade: 0 },
    { nome: 'Nike Air More Uptempo', imagem: './imagens/tenis 9.webp', preco: 1500, quantidade: 0 }
]

let produtoDoCarrinho = []

function addCarrinho(produto) {
    abrirCarrinho()
    var item = listaProdutos[produto]
    item.quantidade = 1
    produtoDoCarrinho.push(item)
    console.log(produtoDoCarrinho)

    salvarCarrinho()
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(produtoDoCarrinho))
    exibeInfosCarrinho()
}

function exibeInfosCarrinho() {
    let local = document.getElementById("produtos")
    let precoCarrinho = document.getElementById("localPrecoCarrinho")
    local.innerHTML = ""
    for (let i = 0; i < produtoDoCarrinho.length; i++) {
        local.innerHTML += `
        <div class="produtoCarrinho">
            <div class="infosEsquerda">
                <img src="${produtoDoCarrinho[i].imagem}" alt="${produtoDoCarrinho[i].nome}">
                <div class="localInfosProduto">
                    <h1>${produtoDoCarrinho[i].nome}</h1>
                    <h3>R$ ${produtoDoCarrinho[i].preco}</h3>
                </div>
            </div>
            <div class="quantidade">
                <img src="./imagens/iconeMais.png" onclick="aumentarQuantidade(${i})">
                <h2>${produtoDoCarrinho[i].quantidade}</h2>
                <img src="./imagens/iconeMenos.png" onclick="diminuirQuantidade(${i})">
            </div>
        </div>`
    }
    let precoTotal = 0;
    for (let i = 0; i < produtoDoCarrinho.length; i++) {
        precoTotal += produtoDoCarrinho[i].preco * produtoDoCarrinho[i].quantidade
    }
    precoCarrinho.innerHTML = `<div class="preco" id="localPrecoCarrinho">
        <h1>Total: R$ ${precoTotal}</h1>
    </div>`
}

function aumentarQuantidade(item){
    produtoDoCarrinho[item].quantidade += 1;
    exibeInfosCarrinho()
}

function diminuirQuantidade(item){
    produtoDoCarrinho[item].quantidade -= 1;
    if(produtoDoCarrinho[item].quantidade <= 0){
        remover(item)
    }
    exibeInfosCarrinho()
}

function remover(index) {
    produtoDoCarrinho.splice(index, 1)
}

botao.addEventListener('click', alterar);

function alterar() {
    menu.classList.toggle('active')
    botao.classList.toggle('active')

}

