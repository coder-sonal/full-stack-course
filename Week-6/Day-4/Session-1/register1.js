$("#register").click(function(){
    var name = $("#name").val();
    var email = $("#staticEmail").val();
    var password = $("#password").val();
    var username = $("#userName").val();
    var mobile = $("#mobileNumber").val();
    var description = $("#typeDes").val();
    var data = {
        name,
        email,
        password,
        username,
        mobile,
        description,
    }

    $.ajax({
        url:"http://localhost:8080/auth/register",
        type:"POST",
        header: {"Access-Control-Allow-Origin" : "*"},
        dataType: 'json',
        data,
    })
    .done(function(res) {
        debugger;
        console.log(res);
    });
})
