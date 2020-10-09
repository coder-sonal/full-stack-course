var arrCustomer= [];
var click = document.getElementById("addDetails");
click.addEventListener("click" , accountHolderDetails)
function accountHolderDetails(){
    var sHolder = document.getElementById("accHolder").value.split(",");

    var newClient = new Customers(document.getElementById("fName").value, 
                                document.getElementById("lName").value,
                                document.getElementById("city").value,
                                document.getElementById("dob").value,
                                document.getElementById("balance").value,
                                document.getElementById("accno").value,
                                sHolder,
                                );
    arrCustomer.push(newClient);
}

function Customers(firstName , lastName , dateOfBirth , city,balance , accountNumber , sharedAccountHolders){
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.dateOfBirth = dateOfBirth;
    this.balance = balance;
    this.accountNumber = accountNumber;
    this.sharedAccountHolders = [sharedAccountHolders];
    this.displayDetails = function(){
        var holder = this.sharedAccountHolders.toString();
        return "First Name :"+this.firstName + "\n" + "Last Name :" + this.lastName + "\n" + "Date Of Birth :" + this.dateOfBirth +"\n"
                + "Balance :" + this.balance + "\n" + "Account Number :" + this.accountNumber + "\n" + "Share Account Holder :" + holder;
    }
} 
var show = document.getElementById("print");
show.addEventListener("click" ,showAccountDetails)

function showAccountDetails(){
    debugger;
    for (var i = 0; i < arrCustomer.length; i++){
        var details = arrCustomer[i].displayDetails();
        var para = document.createElement("p");
        para.innerText = details;
        document.getElementById("displayContainer").appendChild(para);
    }
}
