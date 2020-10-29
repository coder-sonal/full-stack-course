var userDetails = JSON.parse(localStorage.getItem("registrationdetails"));
var name = window.location.search;
name = name.split('?')[1];
var personData = userDetails[name];
var search = (Object.keys(userDetails));
search.forEach(function(data){
    if(name === data){
        $("#showdetails").append(`<p> Hello ${personData.firstname} , welcome back </p>`);
        $("#showdetails").append(`<p> First Name : ${personData.firstname} </p>`);
        $("#showdetails").append(`<p> Last Name  : ${personData.lastname} </p>`);
        $("#showdetails").append(`<p> User Name  : ${personData.username} </p>`);
        $("#showdetails").append(`<p> Password   : [Confidential]  </p>`);
        $("#showdetails").append(`<p> Email      : ${personData.email}  </p>`);
        $("#showdetails").append(`<p> Address    : ${personData.address} </p>`);
        $("#showdetails").append(`<p> Mobile No. : ${personData.mobile} </p>`);
        $("#showdetails").append(`<p> User Type  : ${personData.type} </p>`);
    }
})