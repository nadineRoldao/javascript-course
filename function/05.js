// uma função é um objeto que contém um código executável
// funções são de primeira classe, ou seja, pode ser atribuída a uma variável, passada como parâmetro ou ser retornada em outra função

//function declaration
function soma(a, b){
    return a + b;
}

//function expression
var soma = function(a,b){
    return a + b;
}

// qual a diferrença entre as duas?
// na declaration a função é executada antes do código e a expression é carregada durante a interpretação do código

console.log(soma);
console.log(soma(2,5));

// invocando uma função diretamente no escopo global 
soma(5, 7);

//passando uma função como parâmetro
var pruduto = {nome: 'Sapato', preco: 150}
var formulaImposto = function(preco){return preco * 0.1;};
// var calcularPreco = functon (produto, formulaImposto){
//     return produto.preco + formulaImposto(produto.preco);
// }

// retornando uma função
var helloWorld = function () {
    return function (){
        return "hello world";
    }
}
 
console.log(helloWorld);
console.log(helloWorld());

// invocando uma função por meio de um objeto
var pessoa2 = {
    nome: "nadine",
    idade: 20,
    getIdade: function(){
        return this.idade;
    }
};

pessoa.getIdade();

//invocando uma função com call e apply
// são utilizados para identificar em qual escopo a funlçao de ve ser executada

var getIdade = function(extra){
    console.log(arguments);
    return this.idade + extra;
};

var pessoa3 = {
    nome: "marjorie",
    idade: 7,
    getIdade: getIdade
};

console.log(getIdade.call(pessoa3, 2));
console.log(getIdade.apply(pessoa3, [2]));


// invocando uma função por meio do operador new
// funções construtoras vs funções fábrica

//fábrica
// var criarPessoa = funtion (nome, idade){
//     return {
//         nome: nome,
//         idade: idade
//     }
// };

console.log(criarPessoa("mariana", 41));

//construtora
var Pessoa = function(nome, idade){
    this.nome = nome,
    this.idade = idade
};

console.log(new Pessoa("edney", 41));