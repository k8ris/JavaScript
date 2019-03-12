var movieArray = [];
var programArray = [];
console.log(programArray);


var buttonMovieCreate = document.querySelector('#buttonMovieCreate');
buttonMovieCreate.addEventListener('click', createMovie);

var buttonProgramCreate = document.querySelector('#buttonProgramCreate');
buttonProgramCreate.addEventListener('click',createProgram);

var buttonAddMovieToProgram = document.querySelector('#buttonAddMovieToProgram');
buttonAddMovieToProgram.addEventListener('click', function(){
    AddMovieToProgram();
    Update();
});
// buttonAddMovieToProgram.addEventListener('click', createProgram);


function createMovie() {
    var title = document.querySelector('#title');
    var length = document.querySelector('#length');
    var genre = document.querySelector('#genre');
    var movieTextArea = document.querySelector('#movieTextArea');
    var selectMovie = document.querySelector('#selectMovie');
    var valueTitle = title.value;
    var valueLength = length.value;
    var valueGenre = genre.value;

    var movie = new Movie(valueTitle, valueLength, valueGenre);
    movieArray.push(movie);
    
    var p = document.createElement('p');
    var valueOutput = movie.getData();
    var textNode = document.createTextNode(valueOutput);
    p.appendChild(textNode);
    movieTextArea.appendChild(p);

    var movieOption = document.createElement('option');
    var movieTitle = movie.title;
    var MovieTextNode = document.createTextNode(movieTitle);
    movieOption.appendChild(MovieTextNode);
    selectMovie.appendChild(movieOption);    

}

function createProgram() {
    var programTextArea = document.querySelector('#programTextArea')
    var selectProgram = document.querySelector('#selectProgram');
    // var errorMessage = document.querySelector('#error');
    // console.log(selectProgram);
    var valueProgramDate = document.querySelector('#date').value;
    // console.log(valueProgramDate);
    var program = new Program(valueProgramDate);
    // if ( valueProgramDate === programArray[i].data)
    // console.log(program);
    programArray.push(program);
    // for( var i = 0; i <= programArray.length; i++){

    // console.log(programArray)
    var option = '<option>-</option>';
    var list = '<ul>';
    for(var i = 0; i < programArray.length; i++) {
        list +='<li>' + programArray[i].getData() + '</li>';
        option += '<option>' + programArray[i].getData() + '</option>';
        programTextArea.innerHTML = list;
        selectProgram.innerHTML = option; 
    }
    list += '</ul>';
        console.log(valueProgramDate)
        console.log(typeof valueProgramDate);
}
           


function AddMovieToProgram() {
    var selectedMovie = document.querySelector('#selectMovie');
    var selectProgram = document.querySelector('#selectProgram');
    var movie = selectedMovie.value;
    var program = selectProgram.value;
    
    for (var i = 0; i < movieArray.length; i++) {
        if (movieArray[i].title == movie) {
          movie = movieArray[i];
        }

    }
    for (var i = 0; i < programArray.length; i++) {
        if(programArray[i].getData() !== program) {
            program = programArray[i];
        }
    }
    program.addMovie(movie);
}

function Update() {
    var programTextArea = document.querySelector('#programTextArea');
    var selectProgram = document.querySelector('#selectProgram');

    var option = '<option>-</option>';
    var list = '<ul>';
    for(var i = 0; i < programArray.length; i++) {
        list +='<li>' + programArray[i].getData() + '</li>';
        option += '<option>' + programArray[i].getData() + '</option>'
    }
    list += '</ul>';

    programTextArea.innerHTML = list;
    selectProgram.innerHTML = option;
    
}