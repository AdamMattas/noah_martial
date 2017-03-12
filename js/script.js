// Get the modal
var modal = document.getElementById('myModal');

// Get the modal
var modalImage = document.getElementById('modal-inst-image');

// Get the button that opens the modal
var btn = document.getElementsByClassName("inst-image");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var myFunction = function() {
    var attribute = this.getAttribute("data-src");
    modalImage.setAttribute("src", attribute);
    modal.style.display = "block";
};

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', myFunction, false);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}