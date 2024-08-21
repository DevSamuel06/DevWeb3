
const retanguloPrototipo = {
    largura: 0,
    altura: 0,
    cor: 'branco',

    criarClonagem: function() {
        return Object.create(this);
    },

    definirAtributos: function(largura, altura, cor) {
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    },

    exibirInformacoes: function() {
        console.log(`Retângulo - Largura: ${this.largura}, Altura: ${this.altura}, Cor: ${this.cor}`);
    }
};

module.exports = retanguloPrototipo;
