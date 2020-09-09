var income = 500000;
var saving = 600000;
var taxableamount = 0;
var nettax = 0;
var totalincome = income + saving;

if (totalincome < 500000 && saving*0.5 > 50000)
    taxableamount = totalincome - 50000;
else if (totalincome < 500000 && saving*0.5 < 50000)
    taxableamount = totalincome - (saving*0.5);
else if (totalincome < 1000000 && saving*0.3 > 50000)
    taxableamount = totalincome - 50000;
else if (totalincome < 1000000 && saving*0.3 < 50000)
    taxableamount = totalincome - (saving*0.3);
else if (totalincome > 1000000 && saving*0.1 > 50000)
    taxableamount = totalincome - 50000;
else if (totalincome < 1000000 && saving*0.1 < 50000)
    taxableamount = totalincome - (saving*0.3);

console.log("TaxableAmount" + " " + "=" +taxableamount);

if(taxableamount <= 250000) {
    console.log("Total income below 2.5 lakhs")
}
else {
    taxableamount -= 250000
    if(taxableamount >= 1000001) {
        var overSlabAmount = taxableamount - 1000000;
        nettax = overSlabAmount * 0.3;
        taxableamount -= overSlabAmount;
    }
    if(taxableamount >= 500001 && taxableamount <= 1000000) {
        var overSlabAmount = taxableamount - 500000;
        nettax = nettax + overSlabAmount * 0.2;
        taxableamount -= overSlabAmount;
    }
    if(taxableamount >=250001 && taxableamount <= 500000) {
        var overSlabAmount = taxableamount - 250000;
        nettax = nettax + overSlabAmount * 0.1;
    }
}

console.log("TaxAmount" + " " + "=" +nettax);

