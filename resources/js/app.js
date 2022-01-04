
addEventListener('DOMContentLoaded', () => {
  sliderJS();
  modalJS();
  navbarSlidingIndicator();
})


// SLIDER JS
function sliderJS() {
  let slider = document.querySelector(".slider .slide-track");
  slider.innerHTML += slider.innerHTML;
}

// MODAL JS
function modalJS() {
  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btnModal = document.getElementById("openModal");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btnModal.onclick = () => modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => modal.style.display = "none";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
  }
}

// NAVBAR SLIDING INDICATOR
function navbarSlidingIndicator() {
  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('.nav__menu li a');
  console.log(navLinks)

  window.onscroll = () => {
      section.forEach(sec => {
          const top = window.scrollY;
          const sectionTop = sec.offsetTop - 125;
          const sectionHeight = sec.clientHeight;
          let id = sec.getAttribute('id');
          if(top >= sectionTop && top < sectionTop + sectionHeight) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  document.querySelector(`.nav__menu li a[href*=${id}]`).classList.add('active');
              });
          }
      });
  };
}





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