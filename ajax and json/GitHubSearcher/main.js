var loadData = function(searchItem, handle) {
    var apiUrl = 'https://api.github.com/search/users?q=' + searchItem;
    $.get(apiUrl).done(function(data) {
        var result = [];

        for(var i = 0; i < data.items.length; i++) {
            var item = {};

            item.avatar = data.items[i].avatar_url;
            item.login = data.items[i].login;

            result.push(item)
        }
        // console.log(result);
        handle(result);
    })
}
var getData = function () {
    var searchItem = $('input#searcherInput').val();
    return searchItem
}
var render = function (result) {
   
    result.forEach(function (element) {
        var div = $("<div>");
        div.css('display','inline-block')
        var img = $('<img>').attr('src',element.avatar);
        var p = $('<p>').text(element.login);
        div.append(img);
        div.append(p);
        $('#output').append(div)
    })

}

var handle = function(result) {

    render(result)
}

$("#searchButton").on("click", function () {

    var searchItem = getData()

    loadData(searchItem, handle)
})