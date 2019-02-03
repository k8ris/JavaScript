function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}
function MobileApp (name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
} 

//webbApp inherit methods
WebApp.prototype.getData = function() {
    console.log(this.name + ' '+ this.url + ' '+this.technologies + ' '+this.licence + ' '+this.stars)
}
WebApp.prototype.reactBased = function() {
    if (this.technologies === 'React'){
        return true
    }else {return false};
}
WebApp.prototype.isCCLicence = function() {
    if(this.licence === "CC") {
        return true;
    }else {
        return false;
    }
}
WebApp.prototype.like = function () {
   return this.stars++; 
}
WebApp.prototype.showStars = function() {
    console.log('Stars: ' + this.stars);
}

//MobilApp inherit methods
MobileApp.prototype.getData = function() {
    console.log(this.name + ' ' + this.platforms + ' ' +this.licence + ' ' +this.stars)
}
MobileApp.prototype.forAndroid = function() {
    if(this.platforms === 'Android'){
        return true
    }
}
MobileApp.prototype.isCCLicence = function() {
    if(this.licence === "CC") {
        return true;
    }else {
        return false;
    }
}
MobileApp.prototype.like = function () {
   return this.stars++; 
}
MobileApp.prototype.showStars = function() {
    console.log('Stars: ' + this.stars);
}

var url = 'https://www.easports.com/fifa/ultimate-team/web-app/'
wa1 = new WebApp('FUT', url, 'React', 'CC', 5);
ma1 = new MobileApp('Viber', 'Android', 'CC', 4);

wa1.getData();
console.log(wa1.reactBased());
console.log(wa1.isCCLicence());
console.log(wa1.like());
wa1.showStars();

ma1.getData();
console.log(ma1.forAndroid());
console.log(ma1.isCCLicence());
console.log(ma1.like());
wa1.showStars();




