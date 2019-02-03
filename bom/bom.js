function log() {
    console.log('hellooooo')
}
log();

function navigatorObj () {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.product);
}
navigatorObj ();

function isOnline() {
    console.log(window.navigator.onLine)
}
isOnline();

function screenObj() {
    console.log(window.screen.width);
    console.log(window.screen.height);
    console.log(window.screen.availWidth);
    console.log(window.screen.availHeight);
}

screenObj();

function locationObj() {
    console.log(window.location.href);
    console.log(window.location.protocol);
    console.log(window.location.hostname);
    console.log(window.location.port);
    console.log(window.location.host);
    console.log(window.location.search);
}

locationObj();

// function reloading() {
//     console.log(window.location.reload());
// }

// redirects();
// reloading();

// function redirects() {
//     console.log(window.location.href = "http://nike.com")
// }


function putItemInStorage(key,value){
    sessionStorage.setItem(key,value);
}

function readLocalStorage() {
    if (sessionStorage.length === 0) {
        console.log('no data in storage');
    }
    for(var i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.getItem(sessionStorage.key(i)))
    }

}

function removeItemFromStorage(){
    sessionStorage.removeItem('name','kris');
}

putItemInStorage('name','milana');



readLocalStorage();

console.log(window.history);

window.alert('hello');
function displayMessage() {
    if (confirm(answer)) {
        alert('success message')
    }
}

var filing =prompt('how are you?');
var answer = 'we will submit this answer now!' + filing;
displayMessage();






// function timeoutAlert() {
//     alert('uja');
// }
// timeoutAlert();

// setTimeout(timeoutAlert,1000);