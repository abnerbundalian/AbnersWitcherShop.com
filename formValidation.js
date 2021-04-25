document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("Form").addEventListener("submit", validate);
	document.getElementById("submit").addEventListener("click", validate);
	document.getElementById("reset").addEventListener("click", resetForm);

}

function validate(e){
	
	hideAllErrors();

	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}


function resetForm(e){
	// Confirm that the user wants to reset the form.
	if ( confirm('Clear survey?') )
	{
		// Ensure all error fields are hidden
		hideAllErrors();
		
		// Set focus to the first text field on the page
		document.getElementById("name").focus();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

function formHasErrors(){

	let errorFlag = false;

	let name = document.getElementById("name").value

	if(name == ""){
		document.getElementById("name_error").style.display = "block";
		document.getElementById("name_error").style.visibility = "visible";
	}

	let email = document.getElementById("email").value;
	let regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
	
	if (!regex.test(email)){
		document.getElementById("email_error").style.display = "block";
		document.getElementById("email_error").style.visibility = "visible";

		if(!errorFlag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	let tel = document.getElementById("tel").value;
	let regexa = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
	
	if (!regexa.test(tel)){
		document.getElementById("tel_error").style.display = "block";
		document.getElementById("tel_error").style.visibility = "visible";

		if(!errorFlag){
			document.getElementById("tel").focus();
			document.getElementById("tel").select();
		}

		errorFlag = true;
	}
	

	//	Code above here!
	return errorFlag;

}

function hideAllErrors()
{
	//	Get an array of the error fields
	var errorFields = document.getElementsByClassName("error");

	//	Loop through each error field
	for(var i = 0;i < errorFields.length; i++){
		//	Hide the error field
		errorFields[i].style.display = "none";
	}
}