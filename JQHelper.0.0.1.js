
//============================================  val/html

// GET/SET VALUES
function getval(ObjectName){return $(ObjectName).val();}
function setval(ObjectName, Values){$(ObjectName).val(Values);}

// GET/SET HTML
function gethtml(ObjectName) {return $(ObjectName).html();}
function sethtml(ObjectName, Html) {$(ObjectName).append(Html);}

//=========================================== hide/show

function hide(ObjectName){$(ObjectName).hide();}
function show(ObjectName){$(ObjectName).show();}

//=========================================== click/load

function click(ObjectName, callfunction){$( ObjectName).click(callfunction);}
function load(ObjectName,URL){$( ObjectName).load(URL);}
