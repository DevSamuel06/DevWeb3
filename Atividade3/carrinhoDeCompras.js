
class CarrinhoDeCompras {
    constructor() {
        if (CarrinhoDeCompras.instancia) {
            return CarrinhoDeCompras.instancia;
        }

        this.itens = [];
        CarrinhoDeCompras.instancia = this;
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    removerItem(nomeItem) {
        this.itens = this.itens.filter(item => item.nome !== nomeItem);
    }

    listarItens() {
        return this.itens;
    }
}

module.exports = CarrinhoDeCompras;
