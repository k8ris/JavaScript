$(function(){

    $('li:first').addClass('borderBottom');
    $('li').addClass('toUpperCase');
    $('li.active').css('color','red');
    console.log($('li.active'));
    var middleElement = (($('li').length - 1) /2) + '';
    console.log($('li').length -1)
    $('li:eq('+ middleElement+')').css('color','red');
    console.log('li:eq(' + middleElement + ')');
})