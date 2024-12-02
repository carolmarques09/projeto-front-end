// Código feito por Carolina Marques Magalhães Véras

function validarProduto(produto) {
    const nomeRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nomeRegex.test(produto.nome)) {
        return "Nome inválido. O produto deve conter apenas letras, com no mínimo 3 caracteres";
    }

    const descricaoRegex = /^.{10,}$/;
    if (!descricaoRegex.test(produto.descricao)) {
        return "Descrição do produto inválida. Insira no mínimo 10 caracteres";
    }

    const precoRegex = /^\d+(\.\d{1,2})?$/;
    if (!precoRegex.test(produto.preco)) {
        return "Preço inválido. Você deve inserir um número válido (ex.: 13.99 ou 17).";
    }

    const urlRegex = /^(https?:\/\/[^\s]+(\.[^\s]+)+.*)$/i;
    if (!urlRegex.test(produto.urlImagem)) {
        return "URL da imagem inválida! Você deve inserir um link válido (ex.: https:// ou http://)";
    }

    return "Produto válido! Pode prosseguir!";
}

const produto = {
    nome: "O Hobbit",
    descricao: "Livro de 1936, escrito por J.R.R. Tolkien",
    preco: "R$ 37.00",
    urlImagem: "https://www.amazon.com.br/Hobbit-J-R-Tolkien/dp/8578277104",
};

const resultado = validarProduto(produto);
console.log(resultado);
