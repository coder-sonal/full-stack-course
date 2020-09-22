var itemPrice = ['apple', 80, 'banana', 50, 'rice', 70, 'curd', 25];

var totalAmount = itemPrice.filter(function(a){
    if(typeof a === 'number'){
        return a;
    }
}).reduce(function(a,b){
    return a+b;
})
console.log(totalAmount)
