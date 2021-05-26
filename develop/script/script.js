// start of functions/ initiators for materialize to work for our pages
//for side nav to work
document.addEventListener('DOMContentLoaded', function () {
  var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);
});
//materialize auto intiation
M.AutoInit();

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("navbarStick");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//scrollspy

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems);
});
// end of functions/ initiators for materialize to work for our pages