"use strict";


(function () {
    
    function Products(name,price,exd) {
        this.id =parseInt(Math.random() * (100000 - 10000) + 10000);
        this.name = name;
        this.price = parseFloat(price);
        this.expirationDate = new Date(exd); 

        this.getInfo = function () {

            var productCode = this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length-1).toUpperCase() + this.id

        return productCode + ', ' + this.name + ', ' + this.price;
        }
    }

    function ShoppingBag() {
        this.listOfProduct = [];
        
        this.addProduct = function (product) {
        var todayDate = new Date();
            if ( todayDate.getTime() < product.expirationDate.getTime()) {
            this.listOfProduct.push(product); 
            }
        }
        this.calcAveragePriceProduct = function () {
            var sum = 0;

            for (var i = 0; i < this.listOfProduct.length; i++) {
            sum += this.listOfProduct[i].price;   
        }
        
            var average = sum/this.listOfProduct.length

        return average.toFixed(3)
        }
        this.mostExpensive = function () {
            var mostExpensive = this.listOfProduct[0].price;
            for (var i = 0; i < this.listOfProduct.length; i++) {
                if (mostExpensive < this.listOfProduct[i].price) {
                    mostExpensive = this.listOfProduct[i].price;
                }    
            }

        return mostExpensive;
        }
        this.totalPrice = function() {
            var sum = 0;
            for (var i = 0; i < this.listOfProduct.length; i++) {
                sum += this.listOfProduct[i].price;   
            } 

        return sum;
        }
    }
    
    function PaymentCard(accountBalance,validUntilDate) {
        this.accountBalance = parseFloat(accountBalance);
        this.validUntilDate = new Date(validUntilDate);

        this.isActive = function () {
            if (this.validUntilDate.getTime() > Date.new) {
                return 'active'
        }else{ return 'inactive'}
        }
    } 


    function checkoutAndBuy(shoppingBag,paymentCard) {
        if ( paymentCard.accountBalance >= shoppingBag.totalPrice()){
            return 'successful'
        }else{
            return shoppingBag.totalPrice() -  paymentCard.accountBalance
        }

    }











    var banana = new Products('banana',120, '1 1 2020');
    var kiwi = new Products('kiwi', 333.5, '1 1 2020' );
    var pineapple = new Products('ananas', 400.98, '1 1 2020')
    console.log(banana.getInfo());

    var shoppingBag = new ShoppingBag();
    shoppingBag.addProduct(banana);
    shoppingBag.addProduct(kiwi);
    shoppingBag.addProduct(pineapple);

    console.log(shoppingBag.calcAveragePriceProduct())
    console.log(shoppingBag.mostExpensive())
    console.log(shoppingBag.totalPrice())

    var paymentCard = new PaymentCard(256,'1.9.2022');
    console.log(paymentCard.accountBalance)
    console.log(checkoutAndBuy(shoppingBag,paymentCard))

})()