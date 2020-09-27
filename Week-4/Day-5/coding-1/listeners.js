var btn= document.getElementById("col");
btn.addEventListener('click',switchColor);

function random(number){
    return Math.floor (Math.random()*number);
}
function switchColor(){
    var randomColor = 'rgb('+ random(255)+","+random(255)+","+random(255)+')';
    document.getElementById("col").style.color = randomColor;
}
 
var btn2 = document.getElementById("arrayColor");
btn2.addEventListener('click', rdmColor);
var i = 0;

function rdmColor(){
    var colorArray = ["red","green","blue","yellow","pink","orange"];
        var color = colorArray[i];
        document.getElementById("arrayColor").style.backgroundColor = color;
        i++;
}