$( "#nameR" ).click(function() {
    var name = $("#name").val();
    $("#dName").text(name);
  });
$( "#genderR" ).click(function(){
    $("#dGender").text($("#gender").val());
});
$( "#emailId" ).click(function() {
    var email = $("#email1").val();
    $("#dEmail").text(email);
});
$( "#mobileR" ).click(function() { 
    var num = $("#mobile").val();
    $("#dMobile").text(num);
});
$("#resetForm").click(function(){
    $("#dName").text("NAME");
    $("#dGender").text("GENDER");
    $("#dEmail").text("EMAIL");
    $("#dMobile").text("MOBILE");
});
$("#resetDisplay").click(function(){
    $("#name").val("");
    $("#gender").val("");
    $("#email1").val("");
    $("#mobile").val("");
});