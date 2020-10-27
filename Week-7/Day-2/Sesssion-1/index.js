
$("#register").click(function(){
  let fName = $("#firstName").val();
  let lName = $("#lastName").val(); 
  let uName = $("#userName").val(); 
  let userPwd = $("#userPassword").val(); 
  let uEmail = $("#userEmail").val(); 
  let uAddress = $("#userAddress").val(); 
  let uMobile = $("#userMobile").val();
  let userType = $("input:radio[name=exampleRadios]:checked").val()
  let userData = createUser(fName, lName , uName , userPwd , uEmail , uAddress , uMobile ,userType )
})

function createUser(fName = "userFirstName", lName = "userFirstName" ,uName , userPwd , uEmail , uAddress = "ACB Colony", uMobile = "1234056789" ,userType ){
   debugger
    let userDetails = {firstname: fName,
                    lastname: lName,
                    username: uName,
                    password: userPwd,
                    email: uEmail,
                    address: uAddress,
                    mobile: uMobile,
                    type: userType}
}