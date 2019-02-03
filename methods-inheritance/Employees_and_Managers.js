function Person(name ,surname) {
    this.name = name;
    this.surname = surname;
};
Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
};

//Person test

var kris = new Person('kris' , 'rai');

function Employee(name, surname, job, salary) {
    Person.call(this,name,surname);
    this.job = job;
    this.salary = salary;
}; 
Employee.prototype.getData = function() {
    return this.name + ' ' + this.surname + ' ' + this.salary;
};
Employee.prototype.getSalary = function() {
    console.log(this.salary);
};
Employee.prototype.increaseSalary = function() {
    this.salary = this.salary + this.salary / 10;
};

// Employee test
var mara = new Employee('mara', 'maric', 'teacher', 300);
// console.log(mara)

function Developer(name, surname,job, salary, specialization) {
    Employee.call(this, name,surname,job,salary);
    this.specialization = specialization;
};
Developer.prototype.getSpecialization = function() {
    console.log(this.specialization);
};

// Developer test
var pera = new Developer('Pera', 'Peric', 'JS programmer', 1000, 'Front-End');
// console.log(pera);

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
};
// console.log(Employee.prototype)

//Manager inherits from Employee
// console.log(Manager.prototype)
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
// Manager.prototype.constructor = Manager;
// console.log(Manager.prototype)

Manager.prototype.getDepartment = function() {
    console.log(this.department);
};
Manager.prototype.changeDepartment = function(newDepartment) {
    this.department = newDepartment;
};

// console.log(Manager.prototype)
// console.log(Employee.prototype)
// console.log(Manager.prototype.constructor)



// Manager test
var koja = new Manager('Koja', 'Kojic', 'manager', 1000, 'D1');
// console.log(koja);

//tests
// mara.getSalary();
// mara.increaseSalary();
// mara.getSalary();
// var maraData = mara.getData();
// console.log(maraData);

// pera.getSpecialization();

koja.changeDepartment('D3');
var kojaData = koja.getData();
console.log(kojaData);
koja.getDepartment();



























