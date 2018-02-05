/*
*Created by freelancer Satyapriya Mishra on 27th Nov, 2017
*satyapriyamishra111@gmail.com
*7619403990
*/
$(document).ready(function () {
$('.hideIt').hide();
$('#submit_btn').on('click', function (e) {
e.preventDefault();

     total = 0;
     window.finalStatus;
function calculate (arg) {
    count = arg.count || 0;
    total = total + count;
}
//calculate ({foo:12,bar:23});
var arr = [
        {status : $('#id1').val(), count : 5},
        {status : $('#id2').val(), count : 10},
        {status : $('#id3').val(), count : 8},
        {status : $('#id4').val(), count : 8},
        {status : $('#id5').val(), count : 5},
        {status : $('#id6').val(), count : 5},
        {status : $('#id7').val(), count : 8},
        {status : $('#id8').val(), count : 5},
        {status : $('#id9').val(), count : 5},
        {status : $('#id10').val(), count : 6},
        {status : $('#id11').val(), count : 3},
        {status : $('#id12').val(), count : 5},
        {status : $('#id13').val(), count : 5},
        {status : $('#id14').val(), count : 5},
        {status : $('#id15').val(), count : 5},
        {status : $('#id16').val(), count : 3},
        {status : $('#id17').val(), count : 2},
        {status : $('#id18').val(), count : 2},
        {status : $('#id19').val(), count : 5} //took time to diagnose the issue

];
for (var  i = 0; i < arr.length; i++) {
    
        if (arr[i].status != "" && arr[i].status == "YES"){
            calculate(arr[i]);
        }
}

function finalResult () {
    var technical = $("#id2").val();
    var security = $('#id4').val();
    var deadAir = $('#id8').val();
    var tookTime = $('#id19').val();
    var confirmationTaken = $("#confirmationTaken").val();
    if(security == ""  || security == "NO") {
        total = 0;
    }else if ( confirmationTaken == "" || confirmationTaken == 'NA' || confirmationTaken == "NO" ||technical == "" || technical == 'NA' || technical == "NO" || deadAir == "" || deadAir == 'NA' || deadAir == "NO") {
            total = ((total >= 85) ? 84 : total ); 
    }else {
        // total = I don't know;
    }
}
finalResult();

function KB () {
     kbAvailable = $('#kbAvailable').val();
     kbSubmissionNumber = "NA";
     correctKB = "NA";
     keywordForKB = "NA";
    if (kbAvailable == 'YES') {
        kbSubmissionNumber = (($('#kbSubmissionNumber').val() != "") ? $('#kbSubmissionNumber').val() : "NA" );
        
    }else {
        correctKB = (($('#correctKB').val() != "") ? $('#correctKB').val() : "NA" );//$('#correctKB').val();
        keywordForKB = (($('#keywordForKB').val() != "") ? $('#keywordForKB').val() : "NA" );//$('#keywordForKB').val();
    }
    logger($('#kbsubmitNumber'),"The KB submission number is :   " + kbSubmissionNumber);
    logger($('#correctKBs'),"The correct KB is :  " + correctKB);
    logger($('#keywordforkb'),"The keyword for KB is :  " + keywordForKB );
}
KB();
function logger (el,values) {
    el.text(values);
}
if (total >= 85) {
    finalStatus = "PASS";
}else{
    finalStatus = "FAIL";
}
logger($('#totalValue'),"Total value :  " + total);
logger($('#status'),"The status is :  " + finalStatus);
iterator();
});
$('#isRelevantKBAttached').on('change', function () {
    if ($('#isRelevantKBAttached').val() == "NO" || $('#isRelevantKBAttached').val() == "") {
        $('#ifNoRelevantKB').show();
    }else {
        $('#ifNoRelevantKB').hide();
    }
});
$('#properTicket').on('change', function () {
    if ($('#properTicket').val() == "NO" || $('#properTicket').val() == "") {
        $('.hideIt').slideDown();
    }else {
        $('.hideIt').hide();
    }
});
$('#kbAvailable').on('change', function () {
    if($('#kbAvailable').val() == "YES"){
        $('.ifKBAvailable1, .ifKBAvailable2').hide();
    }else {
         $('.ifKBAvailable1').hide();
         $('.ifKBAvailable2').show();
    }
});

})