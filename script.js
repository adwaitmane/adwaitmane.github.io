var modal = document.getElementById("form-ct");
var joinUsButton = document.getElementById("trigger-modal");
var registerButton = document.getElementById("register-button");
var closeButton = document.getElementsByClassName("close-button")[0];
var submitButton = document.getElementById("submit-button")


joinUsButton.onclick = function() {
    modal.style.display = "block";
    console.log("vrugh");
};

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
    modal.style.display = "none ";
};

// Close modal when submit clicked
submitButton.onclick = function() {
    modal.style.display = "none ";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }