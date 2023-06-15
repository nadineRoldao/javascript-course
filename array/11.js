// Array API
var carros = ["Corsa", "HB20", "HRV"];

// traz o array em si
console.log(carros.valueOf());

// transforma o array em uma string
console.log(carros.toString());

// retorna a quantidade de elementos no array
console.log(carros.length);

// inserindo novos elementos no final do array
carros.push("Meriva");

// removendo o ultimo elemento do array
carros.pop();

// inserindo novos elementos no inicio do array
carros.unshift("Fusca");

// removendo o primeiro elemento do array
carros.shift();

// retorna o indice do elemento
var posicao = carros.indexOf("HB20");

// permite que removemos, troque e adicione um elemento em uma posicao

// REMOVENDO
// primeiro parametro é o indice do elemento que eu quero remover, segundo parametro é a quantidade de elementos que eu quero remover
// ele retorna um array com os elementos removidos
carros.splice(posicao, 1); 

// SUBSTUINDO
var pos = carros.indexOf("Corsa");

// primeiro parametro é o indice do elemento que eu quero remover, segundo parametro é a quantidade de elementos que eu quero remover e o terceiro parametro é o elemento que eu quero que entre no lugar
carros.splice(pos, 1, "Audi RS7");

// INSERINDO
// Nao é necessario remover um item
carros.splice(pos, 0, "Creta");



