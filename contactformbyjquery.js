var data={};
$(document).ready(function()
{
    	$("button").click(function()
    	{
        	 data.sName= $("#name").val();//text box value
        	 data.sGender = $('[name="radio"]:checked').val();//radio button value
        	 $("#checkSubValue1:checked").each(function() //check box values
			 {
  				  data.sSubjChkValue1=$(this).val();
			 });
			 $("#checkSubValue2:checked").each(function() //check box values
			 {
  				  data.sSubjChkValue2=$(this).val();
			 });		
			 $("#checkSubValue3:checked").each(function() //check box values
			 {
  				  data.sSubjChkValue3=$(this).val();
			 });
			/*$(".chk:checked").each(function() //check box values
			{
  				  data.sSubjChkValue+=$(this).val()+",";
			});	*/		
			data.sYear=$("#year").val();//option button value
       		console.log(data);
    	});
});