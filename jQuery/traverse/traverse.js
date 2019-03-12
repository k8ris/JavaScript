$(function() {
    function select() {
        var a = {
            name: 'kris',
            surname: 'rai',
        }
        console.log(typeof $('img'))
        console.log(a);
        var middle =($('img').parent().last().children().length -1)/2;
        console.log(middle)
        $('img.selected').removeClass('selected');
        console.log( $('img').parent().last().children().eq(middle).addClass('selected'));
    }
    select();
})