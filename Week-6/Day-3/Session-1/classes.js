$("#head1").click(function(){
    $("#one").addClass("class-h1");
});
$("#head3").click(function(){
    $("h3").addClass("class-h3");
});
$("#con").click(function(){
    $("div").removeClass("class-div");
});
$("#head5").click(function(){
    $("h5").removeClass("class-h3");
    $("h5").addClass("class-h5");
});
$("#para").click(function(){
    $("p").addClass(function(index){
        if(index%2 ===0){
            return "class-even";
        }else{
            return "class-odd"
        }
    })
})