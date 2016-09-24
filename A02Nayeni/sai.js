function insure()
{
	var salary = document.getElementById("salary").value;
	var insurance = document.getElementById("insurance").value;
	var result= salary+insurance;
	//document.getElementById("abc").innerHTML=(salary+insuranace);
	
	window.alert("Your total salary per year is $" +(result));
};
