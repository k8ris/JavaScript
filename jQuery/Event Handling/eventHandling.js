$(function(){
    console.log('hello')
    $('body').on('click',function () {
        var x = event.pageX;
        console.log(x);
        var y = event.pageY;
        $('img').css('top',y);
        $('img').css('left',x);
    });
})




