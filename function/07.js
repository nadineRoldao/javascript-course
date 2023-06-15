// encapsulamento usando factory function

var createCounter = function (){
    var value = 0;
    return {
        add: function (){
            return ++value;
        }
    };
};

var counter = createCounter();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

// Constructor function

var Counter = function (){
    var value = 0;
    this.add = function(){
        return ++value;
    };
};

var counter2 = new Counter();
counter2.value; // undefined
counter2.add(); // 1
counter2.add(); // 2
counter2.add(); // 3

