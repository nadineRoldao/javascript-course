// iterando um array com forEach
var frutas = [];
frutas[0] = "Banana";
frutas[1] = "Melancia";
frutas[3] = "Manga";

frutas.forEach(function(elemento){
    console.log(elemento);
});

// filtrando o array com filter
var carros  = [];

carros[0] = {marca: "Honda", modelo: "Civic", preco: 46000};
carros[1] = {marca: "Hiunday", modelo: "Veloster", preco:28500};
carros[2] = {marca: "Chevrolet", modelo: "Cruze", preco: 20300};
carros[3] = {marca: "Honda", modelo: "Fit", preco: 40500};

var carrosFilter = carros.filter(function(elemento){
    return elemento.marca === "Honda";
});

console.log(carrosFilter);

// quero saber se todos os elementos sao da mesma marca
// retorna true ou false
var carrosEvery = carros.every(function(elemento){
    return elemento.marca === "Honda";
});

console.log(carrosEvery.toString());

// quero saber se tem algum elemento da mesma marca
// retorna true ou false
var carrosSome = carros.some(function(elemento){
    return elemento.marca === "Honda";
});

console.log(carrosSome.toString());

// serve para mapearmos os elementos os transformando 
// ele cria um array com a informacao que eu quero do array
var carrosMap = carros.map(function(elemento){
    return elemento.marca;
});

console.log(carrosMap.toString());

// usamos quando queremos derivar um array transformado
var carrosReduce = carros.reduce(function(prev, cur){
        return prev + cur.preco;
}, 0);

console.log(carrosReduce.toString());

// gera um novo array com a juncao dos arrays que eu estou indicando
var frutas1 = [];
frutas1[0] = "Banana";
frutas1[1] = "Melancia";
frutas1[3] = "Manga";

var frutas2 = [];
frutas2[0] = "Macã";
frutas2[1] = "Laranja";
frutas2[3] = "Limao";

var todasFrutas = frutas1.concat(frutas2);

console.log(todasFrutas.toString());

// Serve para cortarmos o array, o primeiro parametro é o indice inicial e o segundo é o indice -1
var frutasSlice = todasFrutas.slice(0, 2);

console.log(frutasSlice.toString());

// Inverte a ordem de um array (alterando o mesmo)
var animais = ["elefante", "macaco", "leao", "raposa"];
animais.reverse();
console.log(animais.toString());

// ordena os elementos da lista
console.log(animais.sort());

// usando sort de outra maneira, ordenado os carros por preco
// essa funcao deve retornar um numero negativo, 0 ou um numero positivo, sendo um numero negativo 'a' deve vir em primeiro lugar, sendo 0 ele ficam na mesma posicao e sendo positivo 'b' deve vir antes 
var carrosSort = carros.sort(function(a, b){
    return a.preco - b.preco;
});
console.log(carrosSort);

// juntando elementos de um array com base no separador
var cores = [];
cores[0] = "verde";
cores[1] = "azul";
cores[2] = "roxo";
cores[3] = "vermelho";
cores[4] = "rosa";
cores[5] = "preto";

var coresJoin = cores.join("-");

console.log(coresJoin);