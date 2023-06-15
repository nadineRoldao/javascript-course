// Revealing Module Pattern -  atributos privados (utilizamos o _ na frente para indicar um atributo privado)
// encapsulamos nossas funcoes para que nosso codigo nao fique poluido
// o escopo global acaba poluindo o código
var counter = (function(){
    var _value = 0;
    var _add = function(){
            return ++_value;
    };
    var _reset = function(){
            _value = 0;
    };
    return {
        add: _add,
        reset: _reset
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());

