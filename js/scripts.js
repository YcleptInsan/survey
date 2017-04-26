$(document).ready(function(){
  $("form#main").submit(function(event){
    event.preventDefault();
    var name1 = $("input#name").val();
    var style = parseInt($("option.robot-style").val());
    $("#output").text(name1, style);
  });
});
