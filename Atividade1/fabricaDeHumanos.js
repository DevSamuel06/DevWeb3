
const FabricaDePersonagens = require('./fabricaDePersonagens');
const Personagem = require('./personagem');

class FabricaDeHumanos extends FabricaDePersonagens {
    criarPersonagem(nome) {
        const atributos = {
            força: 10,
            agilidade: 8,
            inteligência: 7
        };
        return new Personagem(nome, atributos);
    }
}

module.exports = FabricaDeHumanos;
