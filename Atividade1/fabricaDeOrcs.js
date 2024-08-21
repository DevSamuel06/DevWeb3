
const FabricaDePersonagens = require('./fabricaDePersonagens');
const Personagem = require('./personagem');

class FabricaDeOrcs extends FabricaDePersonagens {
    criarPersonagem(nome) {
        const atributos = {
            força: 12,
            agilidade: 6,
            inteligência: 5
        };
        return new Personagem(nome, atributos);
    }
}

module.exports = FabricaDeOrcs;
