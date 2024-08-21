
const FabricaDePersonagens = require('./fabricaDePersonagens');
const Personagem = require('./personagem');

class FabricaDeElfos extends FabricaDePersonagens {
    criarPersonagem(nome) {
        const atributos = {
            força: 7,
            agilidade: 12,
            inteligência: 10
        };
        return new Personagem(nome, atributos);
    }
}

module.exports = FabricaDeElfos;
