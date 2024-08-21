
const circuloPrototipo = {
    raio: 0,
    cor: 'branco',

    criarClonagem: function() {
        return Object.create(this);
    },

    definirAtributos: function(raio, cor) {
        this.raio = raio;
        this.cor = cor;
    },

    exibirInformacoes: function() {
        console.log(`Círculo - Raio: ${this.raio}, Cor: ${this.cor}`);
    }
};

module.exports = circuloPrototipo;
