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



// NEW FUNCTION FOR COMMON USE
//===========================================  percentage/check
// Calulate Percentage
function percentage(total, price) {return (total/price) * 100;}

// Check fucntion similar to if condition
function check(con, tpara, fpara) {if(condition){return tpara}else{return fpara}}
