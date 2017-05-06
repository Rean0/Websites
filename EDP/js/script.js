$(document).ready(function(){

  var dropdownOpen = false;

  $('.menu').on("click", '.dropbtn', function(event){
    event.preventDefault();

    if(dropdownOpen == false){
      $('.dropdown-content').show();
      dropdownOpen = true;
    } else if(dropdownOpen == true){
      $('.dropdown-content').hide();
      dropdownOpen = false;
    }
  });

});
