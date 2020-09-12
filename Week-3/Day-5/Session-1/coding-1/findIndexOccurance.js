var arrayGames = ["Basket-Ball","Foot-Ball","Criket","Foot-ball","Badminton","Criket"];
var game = "Criket";
var findOccurance = [];
findIndexPos(arrayGames);

function findIndexPos(sports){
    matchFound = false;
    var i = 0;
    for (i = 0; i <= sports.length-1; i++){
        var khel = sports[i];
        if (khel == game){
            matchFound = true;
            findOccurance.push(i)
        }
        else{
            matchFound =false;
        }
    }
    if (matchFound){
        console.log(findOccurance);
    }
    if (!matchFound){
        console.log(-1);
    }
}
