'use strict';

(function() {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + ' ' + this.surname
        }
    }

    function Seat(number, category) {
        this.number = number ||parseInt(((100 - 10) * Math.random()) + 10) ;
        this.category = category || 'E';

        this.getData = function () {
            return this.number + ', ' + this.category;
        }
    }

    function Passenger(person,seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData();
        }
    }

    function Flight(relation,date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassenger = [];

        this.addPassenger = function (passenger) {
            this.listOfPassenger.push(passenger);
        }
        this.getData = function () {
            var day = this.date.getDate(); 
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();

            var formattedDate = day + '.' + month + '.' + year;

            return formattedDate + ', ' + this.relation;
            
        }
    }

    function Airport() {
        this.name = 'Nikola Tesla';
        this.listOfFlights = [];

        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        this.getData = function () {
            var totalPassenger = 0;
            var numberOfPassenger = 0;
            var output = '';
            for (var i = 0; i < this.listOfFlights.length; i++){
                totalPassenger += this.listOfFlights[i].listOfPassenger.length;
                numberOfPassenger = this.listOfFlights[i].listOfPassenger.length;
                var passengersOutput = '';
                for (var j = 0; j < numberOfPassenger ; j++){
                    passengersOutput += '\t\t' + this.listOfFlights[i].listOfPassenger[j].getData() + '\n';
                }
                
                output += '\t'+ this.listOfFlights[i].getData()+ '\n' + passengersOutput ;
            
            } 
            
            return 'Airport:' + this.name + ' total passenger: ' + totalPassenger + '\n' + output;
        
        }
                    

    }


    function createFlight(relation,date){
        return new Flight(relation,date);
    }
    function createPassenger(firstName,lastName,seatNumber,category) {
        var person = new Person (firstName,lastName);
        var seat = new Seat(seatNumber,category);
        var passenger = new Passenger(person,seat);

        return passenger;
    }

    //instance od Airport
    var airport = new Airport();

    //instance of flights

    var firstFlight = createFlight("Belgrade - New York","Oct 25 2017") ;
    var secondFlight = createFlight("Barcelona - Belgrade","Nov 11 2017");

    var passenger1 = createPassenger( "John","Snow" , 1, "b" );
    var passenger2 = createPassenger( "Cersei","Lannister",2,"b");
    var passenger3 = createPassenger( "Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger( "Tyrion","Lannister" );

    firstFlight.addPassenger(passenger1);
    firstFlight.addPassenger(passenger2);
    secondFlight.addPassenger(passenger3);
    secondFlight.addPassenger(passenger4);

    airport.addFlight(firstFlight);
    airport.addFlight(secondFlight);

    





    console.log(airport.getData())
    




    


})()




















