
//============================================  val/html

// GET/SET VALUES
function getval(ObjectName){return $(ObjectName).val();}
function setval(ObjectName, Values){$(ObjectName).val(Values);}

// GET/SET HTML
function gethtml(ObjectName) {return $(ObjectName).html();}
function sethtml(ObjectName, Html) {$(ObjectName).append(Html);}

//=========================================== hide/show

// Hide in document
function hide(ObjectName){$(ObjectName).hide();}

// Show in document
function show(ObjectName){$(ObjectName).show();}

//=========================================== click/load

// Object Click Event
function click(ObjectName, callfunction){$( ObjectName).click(callfunction);}

// Object Load Event
function load(ObjectName,URL){$( ObjectName).load(URL);}
