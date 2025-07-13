$(document).ready(function()
{
  //hide the all of the element with class msg_body
  $(".urdulinkbody").hide();
  //toggle the componenet with class msg_body
  $(".urdulinkhead").click(function()
  {
    $(this).next(".urdulinkbody").slideToggle(600);
  });
});