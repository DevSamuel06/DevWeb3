
const Pedido = require('./pedido');

class PedidoBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.pedido = new Pedido();
    }

    adicionarIngrediente(ingrediente) {
        this.pedido.adicionarIngrediente(ingrediente);
        return this;
    }

    definirTamanho(tamanho) {
        this.pedido.definirTamanho(tamanho);
        return this;
    }

    definirTipoDeMassa(tipoDeMassa) {
        this.pedido.definirTipoDeMassa(tipoDeMassa);
        return this;
    }

    construir() {
        const resultado = this.pedido;
        this.reset(); // Pronto para construir um novo pedido
        return resultado;
    }
}

module.exports = PedidoBuilder;
