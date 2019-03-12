$(function() {
    var links = ['https://www.tate.org.uk/art/images/work/N/N06/N06136_10.jpg',
'https://www.original-prints.com/images/product_images/popup_images/1655_0_Chagall_Vitraux_2.jpg',
'https://images-na.ssl-images-amazon.com/images/I/81bpSbBU0AL._SX425_.jpg','https://www.tate.org.uk/art/images/work/N/N06/N06136_10.jpg',
'https://www.tate.org.uk/art/images/work/N/N06/N06136_10.jpg',
'https://www.tate.org.uk/art/images/work/N/N06/N06136_10.jpg',
'https://www.tate.org.uk/art/images/work/N/N06/N06136_10.jpg'];

    for (var i = 0; i < links.length; i++) {

        var img = $('<img>');
        img.attr('src',links[i]);
        $('body').append(img)
    }
    
    var p = $('<h1>gallery Marc Chagall</h1>');
     $('body').prepend(p);

     $('img').each(function(index,element){
        var width = Math.random()*(400-100) + 100;
        $(element).css('width',width)
    })
    $('img').each(function(index,element){
        var currentWidth = parseInt($(element).css('width'));
        if(currentWidth < 300) {
            $(element).css('border', 'solid 5px green');

        }
        return false;
    })
     
})



