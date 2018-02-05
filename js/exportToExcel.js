var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()
//tableToExcel('testTable', 'W3C Example Table');

//this function will assign the form values to the table
function tableAssigner (f,t) {
  if(t == 't3'){
     $('.t3').text($('.f31').val() +" / "+ $('.f32').val() + " / " +$('.f33').val());
    
  }else if (t == 't9'){
    $('.t9').text($('.f91').val() +" hr/ "+ $('.f92').val() + " min/ " +$('.f93').val() + "sec");
  }else if (t == 't71') {
    $('.t71').text($('.f711').val() +" / "+ $('.f712').val() + " / " +$('.f713').val());
  }
    else {
    $("."+ t).text($("." + f).val());
  }
  $('.totalMarks').text(total);
  $('.finalstatus').text(finalStatus); 
}

//this function iterates over the form and table classes 
function iterator () {
  for(var i = 1; i <= 71; i++){
    param1 = 'f'+i;
    param2 = 't'+i;
    tableAssigner(param1,param2);
  }
  tableToExcel('testTable', 'W3C Example Table');
  setTimeout(function () {
    autoMailer();
  },2000);
}

function autoMailer () {
   bodyContent = "Hi " + $('.f1').val().split('@')[0] + ", %0D%0AThe detailed summary of your application is as follows .%0D%0A%0D%0A Date Of Audit : "+ $('.t3').text() + "%0D%0A Total value :  " + total + "%0D%0A Status :   " + finalStatus + "%0D%0A The KB submission number is : "
     + kbSubmissionNumber +  "%0D%0A The correct KB is :  " + correctKB + "%0D%0A The keyword for KB is :  " + keywordForKB + "%0D%0A%0D%0AThank you";
  var email = $('.f1').val();
        var subject = 'Summary of Application status for  ' + $('.f1').val().split('@')[0];
        var emailBody = bodyContent;
        var attach = 'Path'
       document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}

