/******f************
    
    Project 3 Javascript
    Name: Sergio Scaramuzzi
    Date: 2021-12-03
    Description: Validates the contact page form.

*******************/

/*
 * Validates the user inputs before submitting.
 */
function validate(e)
{
	hideErrors();
	formHasErrors();

	if(formHasErrors())
    {
		e.preventDefault();
		return false;
	}

	return true;
}

/*
 * Raises a flag if a user input error is detected.
 */
function formHasErrors()
{
    let firstError = false;
    let errorFlag = false;
    let fields = ['name', 'number', 'email', 'subject']
    
    let regexDict = 
    {
        email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        number: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/ 
    }

    for (let i = 0; i < fields.length; i++)
	{
		if (document.getElementById(fields[i]).value === "")
		{
			document.getElementById(fields[i]+'_error').style.display = "block";
			errorFlag = true;
		}
		
		if (errorFlag === true && firstError === false)
		{
			document.getElementById(fields[i]).focus();
			firstError = true;
		}
	}

    for (const [key, value] of Object.entries(regexDict))
	{
		let regex = new RegExp(value);
		let input = document.getElementById(key).value;

		if (!regex.test(input))
		{
			if (document.getElementById(key+'_error').style.display == "none")
			{
				errorFlag = true;
				document.getElementById(key + "format_error").style.display = "block";
			}

			if (errorFlag === true && firstError === false)
			{
				document.getElementById(key).focus();
				firstError = true;
			}
		}
	}

    return errorFlag;
}

/*
 * Handles the reset event.
 */
function resetForm(e)
{
	if (confirm('Clear Page?'))
    {
		hideErrors();
		document.getElementById("name").focus();
		
		return true;
	}

	e.preventDefault();
	
	return false;	
}

/*
 * Hides all errors.
 */
function hideErrors()
{
	let error = document.getElementsByClassName("error");

	for ( let i = 0; i < error.length; i++ )
    {
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event.
 */
function load()
{
	hideErrors()
	document.addEventListener("submit", validate);
	document.addEventListener("reset", resetForm);
}

document.addEventListener("DOMContentLoaded", load);
