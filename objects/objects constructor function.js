
// Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!


var myCoffee = {
    name: 'moka',
    flavour: 'chocolate',
    sugar: 'no',
    milk: 'no',
    size: 'small',
}



// Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 



var myMovie = {
    name: 'Decalog',
    director: 'Krzysztof Kieslowski',
    genre: 'drama',
    popularity: 'no',
}



// Write a function that creates an object that represent a computer program. 
// Each program is described by: description,  programming language, git repository, 
// boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  
// a method that checks if the program is written in JavaScript as well as a method that checks if program is 
// completed or not.



function ComputerProgram(description, name, gitRepository) {
    this.description = description
    this.name = name
    this.gitRepository = gitRepository
    this.completed  = false

    this.repository = function () {
       return console.log(this.gitRepository)
    }
    this.isLanguageJS = function () {
       return this.name === 'JavaScript' ? 'yes' : 'no'
    }
    this.isProgramCompleted = function () {
       return this.completed ? 'yes' : 'no'
    }

}

myProgram = new ComputerProgram('tasks','JavaScript','PP');

myProgram.repository();
console.log(myProgram.isLanguageJS());
console.log(myProgram.isProgramCompleted());



// Write a function that creates an object that represents a culinary recipe. 
// Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), 
// list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.  



function CulinaryRecipe(name, typeOfCuisine, complexity, ingredients, preparingTime, preparingInstruction) {
    this.name = name
    this.typeOfCuisine = typeOfCuisine
    this.complexity = complexity
    this.ingredients = ingredients
    this.preparingTime = preparingTime
    this.preparingInstruction = preparingInstruction

    this.ingredientsForMeal = function () {
        console.log(this.ingredients)
    }
    this.canMealPreparedLessThan15min = function () {
        this.preparingTime <= 15 ? console.log('yes') : console.log('no')
    }
    this.changeTypeOfCuisine = function (newTypeOfCuisine) {
        this.typeOfCuisine = newTypeOfCuisine
    }
    this.deleteIngredient = function(ingredient) {
        var j = 0;
        var newArray = [];
        for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i] !== ingredient) {
            newArray[j] = this.ingredients[i];
            j++;
            }       
        }
        this.ingredients = newArray;
        }

}

var recipe = new CulinaryRecipe('butter chicken', 'indian', '5', ['butter', 'chicken', 'spices', 'tomatoes'], 15, 'roast chicken and add others components' );

recipe.ingredientsForMeal();
recipe.canMealPreparedLessThan15min();
recipe.changeTypeOfCuisine('serbian');
recipe.deleteIngredient('butter')
console.log(recipe.typeOfCuisine);
console.log(recipe.ingredients);