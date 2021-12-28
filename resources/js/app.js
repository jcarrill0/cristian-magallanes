let slider = document.querySelector(".slider .slide-track");
slider.innerHTML += slider.innerHTML;



// function validateEmailAddress(email) {
//     let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     return re.test(email);
// }

// function validate() {
//     $("#result").text("");
//     let emailaddress = $("#email").val();

//     if (validateEmailAddress(emailaddress)) {
//         $("#result").text(emailaddress + " is valid :)");
//         $("#result").css("color", "green");
//     } else {
//         $("#result").text(emailaddress + " is not correct, please retry:(");
//         $("#result").css("color", "red");
//     }
//     return false;
// }

// $("#validate").bind("click", validate);