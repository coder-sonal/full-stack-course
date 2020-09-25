function num(value){
    
    var x = document.getElementById("score").innerHTML;
    x = x+value;
    document.getElementById("score").innerHTML = x;
}
function del(){
    var x = document.getElementById("score").innerHTML;
    var newscore = ""
    for (var i=0; i<=x.length-2; i++){
        var c = x[i];
        newscore = newscore + c;
    }
    document.getElementById("score").innerHTML = newscore;
}
function clearAll(){
    document.getElementById("score").innerHTML = "";
}
function check(){
    var num1 = parseInt(document.getElementById("min").innerHTML)
    var num2 = parseInt(document.getElementById("max").innerHTML)
    var  s = parseInt(document.getElementById("score").innerHTML)
    if(s >= num2){
        console.log()
       document.getElementById("max").innerHTML = s;
    }else if(s <= num1){
       document.getElementById("min").innerHTML = s;
   }
   document.getElementById("score").innerHTML = "";
}
