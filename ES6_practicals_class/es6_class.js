// Person and Programmer: 

// Create a class Person with properties name and surname. 
// Write a constructor of the Person class. 
// Add a method printPersonData that prints out person’s name and surname. 



// Create a class Programmer with properties name, surname, and languages that extends Person class. Property languages represents programming languages that the programmer knows.  
// Write a constructor of the Programmer class. Don’t forget to use parent constructor to complete the job. 
// Add a method printProgramerData that prints out name and surname and all the programming languages that the programmer knows. 
// Add a method learnedNewLanguage that extends the list of the programming languages with the name of the new language.

// 	For example: 
// Programmer: Pera Peric JavaScript, Python, PHP
// 		Programmer: Zika Zikic Java, C#


class Person{
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonDate() {
        console.log(`Programmer:${this.name} ${this.surname}`)
    }
}

class Programmer extends Person{
    constructor(name,surname,languages){
        super(name,surname)
        this.languages = languages;
    }
    printProgramerData(){
        console.log(`Programmer:${this.name} ${this.surname} ${this.languages}`)
    }
    learnedNewLanguage(newLanguage){
        this.languages.push(newLanguage);
    }
    
}
let prog1 = new Programmer('kristina','raickovic',['java','c++'])
prog1.printProgramerData();
prog1.learnedNewLanguage('JS');
prog1.printProgramerData();


