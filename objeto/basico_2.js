const produto = {
    nome: 'Ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function(){
        return preco * (1 - desconto);
    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto());