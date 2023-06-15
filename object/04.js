// um objeto é uma coleção dinâmica de chaves e valores de qualquer tipo de dado.
// é possível adicionar e remover propriedades a qualquer momento

var pessoa = {
    nome: "João",
    idade: 20
};

pessoa.telefone = "12343-6547";
pessoa["cor dos olhos"] = "verde";

pessoa.endereco = {};
pessoa.endereco.bairro = "vila mazzei";

console.log(pessoa);

// apagando propriedades de um objeto
delete pessoa.telefone;
console.log(pessoa);
