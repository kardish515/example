

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var beverage = $("#beverage").val();
    alert(beverage);
    event.preventDefault();
  });
});
