// 


'use strict';
(function (){
    class Genre {
        constructor(genre){
            this.genre = genre;
        }
        getData() {
            var firstLetter = this.genre.charAt(0);
            var lastLetter = this.genre.charAt(this.genre.length - 1);

        return `${firstLetter.toUpperCase()}${lastLetter.toUpperCase()}`;  
        }
    }
    class Movie extends Genre{
        constructor(title,genre,length){
            super(genre);
            this.title = title;
            this.length = length;
        }
        getData() {
            var shortGenre = super.getData();
            return `${this.title}, ${this.length}min,`
        }
    }
    class Program {
        constructor(date) {
            this.date = date;
            this.listOfMovies = [];
        }
        getProgramDuration() {
            var totalDuration  = 0;
            this.listOfMovies.forEach(el => totalDuration += el.length);
        return totalDuration;
        }
        addMovie(movie) {
            this.listOfMovies.push(movie)
        }
        getData() {
            var output = `${this.date}, total program duraiton:${this.getProgramDuration()}
            `;
            for (let i = 0; i < this.listOfMovies.length; i++) {
                output += `        ${this.listOfMovies[i].getData()}
            `   
            }
         return output;   
        }    
    }
    class Festival{
        constructor(name){
            this.name = name;
            this.listOfPrograms = [];
        }
        numberOfMoviesInAllPrograms() {
            let numberOfMoviesTotal = 0;
            this.listOfPrograms.forEach(el => numberOfMoviesTotal += el.listOfMovies.length);
        return numberOfMoviesTotal;
        }
        addProgram(program) {
            this.listOfPrograms.push(program);
        }
        getData(){
            let output = `${this.name} has ${this.numberOfMoviesInAllPrograms()} movie titles`;
            for (let i =0; i < this.listOfPrograms.length; i++){
                output += `
                ${this.listOfPrograms[i].getData()}`
            }
        return output;
        }

    }

    let createMovie = (moveTittle,length,genre) => new Movie(moveTittle,length,genre);
    let createProgram = date => new Program(date);

    let hollywoodMovieFestival = new Festival('hollywoodMovieFestival');
    var actionProgram = createProgram('13 1 2019');
    var comedyProgram = createProgram('14 1 2019');

    var aquaMan = createMovie('aquaman', 'action', 130);
    var vice = createMovie('vice', 'comedy', 110);
    var wonderWoman = createMovie('wonder woman', 'action', 120);
    var nightSchool = createMovie('night school', 'comedy', 90);
    console.log(typeof aquaMan.getData())
    actionProgram.addMovie(aquaMan);
    actionProgram.addMovie(vice);
    comedyProgram.addMovie(wonderWoman);
    comedyProgram.addMovie(nightSchool);

    hollywoodMovieFestival.addProgram(actionProgram);
    hollywoodMovieFestival.addProgram(comedyProgram);

    console.log(hollywoodMovieFestival.getData());

})()