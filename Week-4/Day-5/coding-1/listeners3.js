var btn= document.getElementById("col");
btn.addEventListener('click', bgColor);
var count = 0;
btn.addEventListener('mouseover', size)

function rdm(no){
    return Math.floor (Math.random()*no);
}
function bgColor(){
    if (count < 2){
        var randomColor = 'rgb('+ rdm(255)+","+rdm(255)+","+rdm(255)+')';
        document.body.style.backgroundColor = randomColor;
        count++;
    }
    else {
        btn.removeEventListener("click", bgColor);
    }
}
function size(){
    var textSize = rdm(100);
    document.getElementById('col').style.fontSize = textSize+"px";
}
 

