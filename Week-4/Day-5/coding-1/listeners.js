var btn= document.getElementById("col");

function random(number){
    return Math.floor (Math.random()*number);
}
function switchColor(){
    var randomColor = 'rgb('+ random(255)+","+random(255)+","+random(255)+')';
    document.getElementById("col").style.color = randomColor;
}
 

btn.addEventListener('click',switchColor);