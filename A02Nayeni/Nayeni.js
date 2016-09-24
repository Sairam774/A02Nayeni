function sal()
{
	//var salary = document.getElementById("salary").value;
	var salary=$("#salary").val();
	//var insurance = document.getElementById("insurance").value;
	var insurance=$("#insurance").val();
	var result= salary-(salary*insurance)/100;
	
	
	window.alert("Your salary per month is $" +(result));
};
