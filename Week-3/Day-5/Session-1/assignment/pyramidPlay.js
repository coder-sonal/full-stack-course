var rows = 4;
var coln = 9;
var len = 7;

pyramid(rows,coln);
inversePyramid(rows,coln);
rhombus(len,coln)

function pyramid(r,c){
    for (var i=0; i < r; i++){
        var line = "";
        for ( var j = 0; j < c; j++){
            if (j == 4 && i == 0) {
            line = line +"0";
            }
            else if ((j == 3 || j == 5) && i == 1){
                line = line + "0";
            }
            else if ((j == 2 || j == 4 || j == 6) && i == 2){
            line = line + "0";
            }
            else if ((j == 1 || j == 3 || j == 5 || j == 7) && i == 3){
                line = line + "0";
            }
            else{
                line = line + "."
            }
        }
       console.log(line);
    }
}

function inversePyramid(r,c){
    for (var i = 0; i < r; i++){
        var line = "";
        for (j = 0; j < c; j++){
            if ((j == 1 || j == 3 || j == 5 || j == 7) && i == 0){
                line = line + "0";
            }  
            else if ((j == 2 || j == 4 || j == 6) && i == 1){
                line = line + "0";
            }
            else if ((j == 3 || j == 5) && i == 2){
                line = line + "0";
            }
            else if (j == 4 && i == 3) {
                line = line +"0";
            }
            else{
                line = line + "."
            } 
        }
        console.log(line);
    }
}


function rhombus(l,c){
    for (var i=0; i < l; i++){
        var line = "";
        for ( var j = 0; j < c; j++){
            if (j == 4 && i == 0) {
            line = line +"0";
            }
            else if ((j == 3 || j == 5) && i == 1){
                line = line + "0";
            }
            else if ((j == 2 || j == 4 || j == 6) && i == 2){
            line = line + "0";
            }
            else if ((j == 1 || j == 3 || j == 5 || j == 7) && i == 3){
                line = line + "0";
            }
            else if ((j == 2 || j == 4 || j == 6) && i == 4){
                line = line + "0";
            }
            else if ((j == 3 || j == 5) && i == 5){
                line = line + "0";
            }
            else if (j == 4 && i == 6) {
                line = line +"0";
            }
            else{
                line = line + "."
            } 
        }
        console.log(line);
    }
}

