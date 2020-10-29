let users = localStorage.getItem('registrationdetails') ? JSON.parse(localStorage.getItem('registrationdetails')) : {} ;
let count = 0;
$("#register").click(function(e){
  $("#userDetails").empty();
  e.preventDefault();
  let fName = $("#firstName").val();
  let lName = $("#lastName").val(); 
  let uName = $("#userName").val(); 
  let userPwd = $("#userPassword").val(); 
  let uEmail = $("#userEmail").val(); 
  let uAddress = $("#userAddress").val(); 
  let uMobile = $("#userMobile").val();
  let userType = $("input:radio[name=exampleRadios]:checked").val()
  var a = (createUser(uName , userPwd , uEmail , userType ,fName ,lName ,uAddress , uMobile));
  users[fName] = a;
  showUserData();
  var resdetails = JSON.stringify(users);
  localStorage.setItem("registrationdetails", resdetails);
})

function showUserData(){
    Object.keys(users).forEach(function(name){
      var user = document.createElement("option");
      user.innerHTML = name;
      document.getElementById("userDetails").appendChild(user); 
    })
}

$("#userDetails").click(function(){
  var search = show();
  window.location.href = "http://127.0.0.1:5500/August2020/Week-7/Day-2/Sesssion-1/display.html?"+search;
  debugger;
})

function show(){
    var name = $("#userDetails").val();
    var personData = users[name];
    var search = personData.firstname;
    return search;
    // if(count > 0){
    //   $("#showdetails").empty();
    // }
    // count++;  
    // $("#showdetails").append(`<p> Hello ${personData.firstname} , welcome back </p>`);
    // $("#showdetails").append(`<p> First Name : ${personData.firstname} </p>`);
    // $("#showdetails").append(`<p> Last Name  : ${personData.lastname} </p>`);
    // $("#showdetails").append(`<p> User Name  : ${personData.username} </p>`);
    // $("#showdetails").append(`<p> Password   : [Confidential]  </p>`);
    // $("#showdetails").append(`<p> Email      : ${personData.email}  </p>`);
    // $("#showdetails").append(`<p> Address    : ${personData.address} </p>`);
    // $("#showdetails").append(`<p> Mobile No. : ${personData.mobile} </p>`);
    // $("#showdetails").append(`<p> User Type  : ${personData.type} </p>`);
}


function createUser(uName , userPwd , uEmail, userType, fName, lName, uAddress, uMobile){
    let userDetails = {
      firstname: fName,
      lastname: lName,
      username: uName,
      password: userPwd,
      email: uEmail,
      address: uAddress,
      mobile: uMobile,
      type: userType
    }
  return userDetails;
}
