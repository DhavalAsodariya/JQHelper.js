//============================================ $(document).ready
function doc_ready(func) {$( document ).ready(func);}

//============================================  val/html
// GET/SET VALUES
function getval(obj) {return $(obj).val();}
function setval(obj, val) {$(obj).val(val);}

// GET/SET HTML
function gethtml(obj) {return $(obj).html();}
function sethtml(obj, html) {$(obj).append(html);}

//=========================================== hide/show
function hide(obj) {$(obj).hide();}
function show(obj) {$(obj).show();}

//=========================================== click/load
function click(obj, func) {$(obj).click(func);}
function load(obj, url) {$(obj).load(url);}
