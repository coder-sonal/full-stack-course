$("#email").hide();
$("#mobile").hide();
$("#dMobile").hide();
$("#dEmail").hide();
$("button").hide();
$("#rightDiv").hide();
$("#name").keyup(function(){
    var name = $(this).val();
    if ( name.length <= 3 || name.length >= 25){
        $("#errorName").text("Entered Name Is Incorrect")
    }else{
        $("#errorName").text("");
        $("#email").show();
        $("#dEmail").show();
    }
})
$("#email").keyup(function(){
    var email = $(this).val();
    var emailValidity = false;
    for (var i=0; i<=email.length-1; i++){
        if (email[0] === '@' && email[0] === "."){
            emailValidity = false;
        }
        if (email[i] === '@' && i !== 0 ){
            emailValidity = true;
        }
        if (email[i] === '@' && email[i+1] === "."){
            emailValidity = false;
        }
        if(email[i] === "." && email[i+1] === "."){
            emailValidity = false;
        }
        if(email[email.length-1] !== "m"){
            emailValidity = false;
        }
    }
    if(emailValidity){
        $("#errorEmail").text("");
        $("#dMobile").show();
        $("#mobile").show();
    }else{
        $("#errorEmail").text("Enter Valid EmailId")
    }
})
$("#mobile").keyup(function(){
    var mobile = $(this).val();
    debugger;
    if(mobile.length < 11 || mobile.length > 11 ){
        $("#errorMobile").text("Enter Valid Mobile Number")
    }else{
        $("#errorMobile").text("");
        $("button").show();
    }
})
$("button").click(function(){
    $("#rightDiv").show();
    $("#nameD").text($("#name").val());
    $("#emailID").text($("#email").val());
    $("#mobileD").text($("#mobile").val())
    $("#name").val("");
    $("#email").val("");
    $("#mobile").val("");
    $("#email").hide();
    $("#mobile").hide();
    $("#dMobile").hide();
    $("#dEmail").hide();
    $("button").hide();
})
$("#name").click(function(){
    $("#rightDiv").hide();
})
