var btn= document.getElementById("col");

function random(number){
    return Math.floor (Math.random()*number);
}
function switchColor(){
    var randomColor = 'rgb('+ random(255)+","+random(255)+","+random(255)+')';
    document.getElementById("changeColor").style.color = randomColor;
}
 

btn.addEventListener('dblclick',switchColor);