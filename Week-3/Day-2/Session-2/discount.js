var SP = 299.99
var discount = (SP*10)/100
if (discount<=100)
    discount = SP * 0.1
else
    discount =100
var total = SP - discount
if (SP >= 300)
 console.log("Final price:"+ total + ","+" Discount price:"+ discount)
else
 console.log("Discount is Invalid. Final price:"+ SP)