
function validate() {
    //e.preventDefault();
 
    var name = document.f1.name.value;
    var address = document.f1.address.value;
    var email = document.f1.email.value;
    var password = document.f1.password.value;
    var status=false;  

    if (name.length < 1) {
        document.getElementById("nameloc").innerHTML =
            "Please enter your name";
            status=false;  
    } else {
        document.getElementById("nameloc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        status=true;  
    }

    if (address.length < 1) {
        document.getElementById("addressloc").innerHTML =
            "  Please enter your address";
            status=false;  
    } else {
        document.getElementById("addressloc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        status=true; 
    } 

    if (email.length < 1) {
        document.getElementById("emailloc").innerHTML =
            "  Please enter your email";
            status=false;  
    } 
    else {
        document.getElementById("emailloc").innerHTML = " <a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        status=true;  
    }

    if (password.length < 6 && password == "") {
        document.getElementById("passwordloc").innerHTML =
            " Password must be at least 6 char long";
            status=false;  
    } else {
        document.getElementById("passwordloc").innerHTML = "<a href='#' target='_blank'>  <i class='fa fa-check red-color'></i></a>";
        status=true;  
    }

   
   return status;
}


// function savedata() {
//     //e.preventDefault();
//     demoList.innerHTML = `<thead>
//     <tr>
//     <th>Name</th>
//     <th>Address</th>
//     <th>Email</th>
//     <th>Password</th>
//     </tr>
//     </thead>`;

//     var name= document.getElementById("name");
//     var address= document.getElementById("address");
//     var email= document.getElementById("email");
//     var password= document.getElementById("password");

//     var row= demoList.insertRow(-1);

//     var call1 = row.insertCell(0);
//     var call2 = row.insertCell(1);
//     var call3 = row.insertCell(2);
//     var call4 = row.insertCell(3);

//     call1.innerHTML = name.value;
//     call2.innerHTML = address.value;
//     call3.innerHTML = email.value;
//     call4.innerHTML = password.value;

//     return false;
// }