
/*This controls the drop downs in the WelcomePage.
WHen the user clicks on the button, it will toggle
between hiding and showing the dropdown options.
*/
function dropFunction() {
  document.getElementById('myDropdown').classList.toggle("show")
}

/*
This function will close the dropdown if the user
clicks outside of it.
*/
window.onclick = function(event) {
  if (!event.target.mathches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-
    content');
    var i;
    for (i = 0 ; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
