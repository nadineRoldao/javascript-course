// Module Pattern
var counter = (function(){
    var value = 0;
    return {
        add:function(){
            return ++value;
        },
        reset:function(){
            value = 0;
        }
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());

