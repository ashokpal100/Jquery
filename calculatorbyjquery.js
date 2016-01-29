 var addDigit=false;
 var getValue1;
 var getValue2;
 var operation="=";
 var oldVal=0;
$(document).ready(function()
{
    $(".butClass").click(function()//concatenation function
    {
    		if(addDigit==true)
    		{
    			var getValue1=$("input:text").val();
    			var getValue2=($(this).val());
    			var concatValue=getValue1+getValue2;//concat two number
    			$("input:text").val(concatValue);
    		}
    		else
    		{
        		$("input:text").val(($(this).val()));
        		addDigit=true;
    		}
    });
    $(".butOpClass").click(function()//calculation function
    {
    	var newOperation=($(this).val());
    	var newVal=$("input:text").val();
    	switch (operation) 
    	{
            case "+":
                oldVal= parseFloat(oldVal)+ parseFloat(newVal);
                break;
            case "-":
                oldVal= parseFloat(oldVal)- parseFloat(newVal);
                break;
            case "*":
             	oldVal= parseFloat(oldVal)* parseFloat(newVal);
                break;
            case "/":
             	oldVal= parseFloat(oldVal)/ parseFloat(newVal);
                break;
            case "=":
             	oldVal= parseFloat(newVal);
                break;
            default:
                oldVal= parseFloat(newVal);
        }
        	
    $("input:text").val(oldVal);
    addDigit=false;
    operation=newOperation;
    });
    $(".clear").click(function()//concatenation function
    {
            $("input:text").val("0");
            addDigit=false;
            operation="=";
            oldVal=0;
    });
});