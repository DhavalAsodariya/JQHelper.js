
//============================================  val/html

// GET/SET VALUES
function val(ObjectName, Values)
{    
	if(Values == " ")
	{
		return $(ObjectName).val();
	}
	else{
	    $(ObjectName).val(Values);		
	}	
}

// GET/SET HTML
function html(ObjectName, Html) {
	if(Html == " "
	{
		return $(ObjectName).html();
	}
	else{
		$(ObjectName).append(Html);
	}	
}

//=========================================== hide/show

// Hide in document
function hide(ObjectName){
	$(ObjectName).hide();
}

// Show in document
function show(ObjectName){
	$(ObjectName).show();
}

//=========================================== click/load

// Object Click Event
function click(ObjectName, callfunction){
	$( ObjectName).click(callfunction);
}

// Object Load Event
function load(ObjectName,URL){
	$( ObjectName).load(URL);
}
