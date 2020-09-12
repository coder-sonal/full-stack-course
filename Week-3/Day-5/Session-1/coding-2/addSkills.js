var userDitails = {
    firstName: "Sonal",
    lastName: "Singh",
    email: "snsonali62@gmail.com",
    password:  "abc@Sonal"
}
var skill = ["playing", "travelling" , "bhabhi ji ghar pr hai"]

propertyUpdate(userDitails,skill);

function propertyUpdate(userData,skill){
    
    userData.firstName = "Arunabh";
    userData.email = "singh0809@sonal@gmail.com";
    userData.mobieNumber = 7881110006;
    userData.skill = skill;
}

console.log(userDitails);