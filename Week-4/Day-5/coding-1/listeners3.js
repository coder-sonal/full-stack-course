var btn= document.getElementById("col");
btn.addEventListener('click', bgColor);
var count = 0;

function rdm(no){
    return Math.floor (Math.random()*no);
}
function bgColor(){
    debugger;
    if (count < 2){
        var randomColor = 'rgb('+ rdm(255)+","+rdm(255)+","+rdm(255)+')';
        document.body.style.backgroundColor = randomColor;
        count++;
    }
    else {
        btn.removeEventListener("click", bgColor);
    }
}
 

