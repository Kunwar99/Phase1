// var name = prompt("Enter the number of Elements: "); // Defining Array
// var userarr = [];

// // Input from the user 

// for(let i = 0; i<=name; i++){
//             userarr[i] = prompt("Enter Your Name: ");
// }

// for(let i = 0; i<=name; i++){
//     document.write(userarr[i] + "<br>");
// } 

// var userarr = [];

// function fillinfo(){
//     var username = document.getElementById("username").Value;
//     var password = document.getElementById("password").Value;
//     var email = document.getElementById("email").Value;
//     var number = document.getElementById("number").Value;
//     if (username == "username" && password == "password"){
//         alert (" Login Success")
//         return false;
//     } 
// }

var x = 0;
var array = Array();

function add_element()
{
    array[x] = document.getElementById("uinfo").nodeValue;
    alert("Succesfully Added" + x);
    x++;
    document.getElementById('text1').value = "";
}