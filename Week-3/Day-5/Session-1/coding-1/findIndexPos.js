var arrayGames = ["Basket-Ball","Foot-Ball","Criket","Foot-ball","Badminton"];
var game = "Criket";
findIndexPos(arrayGames);

function findIndexPos(sports){
    matchFound = false;
    var i = 0;
    for (i = 0; i <= sports.length-1; i++){
        var khel = sports[i];
        if (khel == game){
            matchFound = true;
            break;
        }
        else{
            matchFound =false;
        }
    }
    if (matchFound){
        console.log(i);
    }
    if (!matchFound){
        console.log(-1);
    }

}
