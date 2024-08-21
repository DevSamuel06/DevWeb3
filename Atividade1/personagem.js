
class Personagem {
    constructor(nome, atributos) {
        this.nome = nome;
        this.atributos = atributos;
    }

    mostrarAtributos() {
        console.log(`Nome: ${this.nome}`);
        for (const [atributo, valor] of Object.entries(this.atributos)) {
            console.log(`${atributo}: ${valor}`);
        }
    }
}

module.exports = Personagem;
