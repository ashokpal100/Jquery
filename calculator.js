$(document).eady(function()
{
    alert("hi");
   $(".operators").click(function()
   {
      var num1=$(".num1").val();
      var sum=parseInt(num1)+parseInt(num2);
      $("#div1").text("sum is:"+sum);
   });

   $(".operands").click(function()
   {
      var buttonValue=$("opbtn").val();

      var sum=parseInt(num1)+parseInt(num2);
      $("#div1").text("sum is:"+sum);
   });
   
});
