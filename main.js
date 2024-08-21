const FabricaDeHumanos = require('./Atividade1/fabricaDeHumanos');
const FabricaDeElfos = require('./Atividade1/fabricaDeElfos');
const FabricaDeOrcs = require('./Atividade1/fabricaDeOrcs');

function criarEMostrarPersonagem(fabrica, nome) {
    const personagem = fabrica.criarPersonagem(nome);
    personagem.mostrarAtributos();
}

const fabricaHumanos = new FabricaDeHumanos();
const fabricaElfos = new FabricaDeElfos();
const fabricaOrcs = new FabricaDeOrcs();

criarEMostrarPersonagem(fabricaHumanos, 'John');
criarEMostrarPersonagem(fabricaElfos, 'Legolas');
criarEMostrarPersonagem(fabricaOrcs, 'Grom');

//////////////////////////////////////////////////////////////////

const PedidoBuilder = require('./Atividade2/pedidoBuilder');
const PedidoDiretor = require('./Atividade2/pedidoDiretor');

const builder = new PedidoBuilder();
const diretor = new PedidoDiretor(builder);

const pedidoSimples = diretor.construirPedidoPizzaSimples();
pedidoSimples.mostrarPedido();

const ingredientes = ['Presunto', 'Cebola', 'Pimentão'];
const tamanho = 'Grande';
const tipoDeMassa = 'Integral';
const pedidoPersonalizado = diretor.construirPedidoPizzaPersonalizada(ingredientes, tamanho, tipoDeMassa);
pedidoPersonalizado.mostrarPedido();

//////////////////////////////////////////////////////////////////

const CarrinhoDeCompras = require('./Atividade3/carrinhoDeCompras');

const carrinho1 = new CarrinhoDeCompras();
carrinho1.adicionarItem({ nome: 'Produto A', preco: 100 });
carrinho1.adicionarItem({ nome: 'Produto B', preco: 150 });

const carrinho2 = new CarrinhoDeCompras();
carrinho2.removerItem('Produto A');

console.log('Itens no carrinho (instância 1):', carrinho1.listarItens());
console.log('Itens no carrinho (instância 2):', carrinho2.listarItens());

console.log('As instâncias são iguais?', carrinho1 === carrinho2);

//////////////////////////////////////////////////////////////////

const retanguloPrototipo = require('./Atividade4/retanguloPrototipo');
const circuloPrototipo = require('./Atividade4/circuloPrototipo');

const retangulo1 = retanguloPrototipo.criarClonagem();
retangulo1.definirAtributos(10, 5, 'azul');
retangulo1.exibirInformacoes(); 

const retangulo2 = retanguloPrototipo.criarClonagem();
retangulo2.definirAtributos(20, 15, 'verde');
retangulo2.exibirInformacoes(); 

const circulo1 = circuloPrototipo.criarClonagem();
circulo1.definirAtributos(7, 'vermelho');
circulo1.exibirInformacoes(); 