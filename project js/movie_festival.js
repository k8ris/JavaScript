'use strict';

(function (){
    
    function Genre(name) {
        this.name = name;

        this.getData = function () {
        
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(this.name.length - 1);

            return firstLetter.toUpperCase() + lastLetter.toUpperCase();
        }
    }

    function Movie(title,genre,length) {
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;

        this.getData = function() {
            return this.title + ', ' + this.length + 'min' + ', ' + this.genre.getData();
        }
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        
        this.getProgramDuration = function () {
            var totalDuration = 0;
            this.listOfMovies.forEach(element => {
                totalDuration += element.length;
            });

        return totalDuration;
        }
        this.addMovie = function(movie) {
            this.listOfMovies.push(movie);
        }
        this.getData = function () {
            var output =  this.date + ', ' + 'total program duration:' + this.getProgramDuration() + 'min\n';
            
            for (var i = 0; i < this.listOfMovies.length; i++) {
                output += '\t\t\t' + this.listOfMovies[i].getData() + '\n';
            }

        return output;
            
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.numberInMoviesInAllPrograms = function() {
            var numberOfMoviesTotal = 0;
            this.listOfPrograms.forEach(element => {
                numberOfMoviesTotal += element.listOfMovies.length;
            });

        return numberOfMoviesTotal;
        }
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
           var output = this.name + ' has ' + this.numberInMoviesInAllPrograms() + ' movie titles' + '\n';

           for (var i = 0; i < this.listOfPrograms.length; i++) {
               output += '\t\t' + this.listOfPrograms[i].getData() + '\n'
           }

        return output;
        }    
    }


    function createMovie(movieTitle, length, genre) {
    return  new Movie(movieTitle,length,genre);
    }
    function createProgram(date) {
    return new Program(date);
    }


    
    var hollywoodMovieFestival = new Festival('hollywoodMovieFestival');

    var actionProgram = createProgram('13 1 2019');
    var comedyProgram = createProgram('14 1 2019');

    var aquaMan = createMovie('aquaman', 'action', 130);
    var vice = createMovie('vice', 'comedy', 110);
    var wonderWoman = createMovie('wonder woman', 'action', 120);
    var nightSchool = createMovie('night school', 'comedy', 90);

    actionProgram.addMovie(aquaMan);
    actionProgram.addMovie(vice);
    comedyProgram.addMovie(wonderWoman);
    comedyProgram.addMovie(nightSchool);

    hollywoodMovieFestival.addProgram(actionProgram);
    hollywoodMovieFestival.addProgram(comedyProgram);

    console.log(hollywoodMovieFestival.getData())

})()