var matrixFun =[
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ];
var size = matrixFun.length-1;

rotateMatrix(matrixFun);

function rotateMatrix(clockwiseMatrix){

    var rotatedMatrix = [[],
                        [],
                        []];
    for (var i = 0; i <= size; i++){
        for (var j = 0; j <= size; j++){
            rotatedMatrix[j][size - i] = clockwiseMatrix[i][j];
        }
       
    }
    console.log(rotatedMatrix);
}

