
class Pedido {
    constructor() {
        this.ingredientes = [];
        this.tamanho = null;
        this.tipoDeMassa = null;
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    definirTamanho(tamanho) {
        this.tamanho = tamanho;
    }

    definirTipoDeMassa(tipoDeMassa) {
        this.tipoDeMassa = tipoDeMassa;
    }

    mostrarPedido() {
        console.log('Pedido:');
        console.log(`Tamanho: ${this.tamanho}`);
        console.log(`Tipo de Massa: ${this.tipoDeMassa}`);
        console.log('Ingredientes:');
        this.ingredientes.forEach((ingrediente, index) => {
            console.log(`${index + 1}. ${ingrediente}`);
        });
    }
}

module.exports = Pedido;
