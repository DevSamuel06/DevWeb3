
const PedidoBuilder = require('./pedidoBuilder');

class PedidoDiretor {
    constructor(builder) {
        this.builder = builder;
    }

    construirPedidoPizzaSimples() {
        this.builder
            .adicionarIngrediente('Queijo')
            .adicionarIngrediente('Molho de Tomate')
            .definirTamanho('Médio')
            .definirTipoDeMassa('Normal');
        return this.builder.construir();
    }

    construirPedidoPizzaPersonalizada(ingredientes, tamanho, tipoDeMassa) {
        ingredientes.forEach(ingrediente => this.builder.adicionarIngrediente(ingrediente));
        this.builder.definirTamanho(tamanho);
        this.builder.definirTipoDeMassa(tipoDeMassa);
        return this.builder.construir();
    }
}

module.exports = PedidoDiretor;
