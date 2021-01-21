function User(name, balance) {
    this.name = name
    this.balance = balance
    this.accountNum = 0
    this.deposit = function () {
        amount = prompt("amount to deposit ");
        this.balance += parseInt(amount);
        this.getbalance()
    }
    this.withdraw = function () {
        amount = prompt("amount to withdraw\n max->4000 min->100 ");
        if (parseInt(this.balance) >= 0) {
            if (parseInt(amount) <= 4000 && parseInt(amount) >= 100) {
                this.balance -= parseInt(amount);
                this.getbalance()
            } else {
                alert("respect the withdrawal limit");
            }
        }
        else {
            alert(this.balance);
            alert("you're broke");
        }


    }


    this.getbalance = function () {

        alert("your balance is " + this.balance);
    }

    this.transfer = function () {
        amount = prompt("amount to transfer ");
        accountNumber = prompt("account Number to transfer to ");
        this.balance-=parseInt(amount);
        
        bank.userMap[parseInt(accountNumber)].balance += parseInt(amount);
        alert("your balance is " + this.balance);
    }
    

}

let bank = {
    name: "Abyssinia",
    userMap: {},

    addUser: function (user) {
        user.accountNumber = Object.keys(this.userMap).length;
        this.userMap[user.accountNumber] = user;
    }
}



let iife = (function () {
    abyssinia = bank;
    abebe = new User("abebe", 1000);
    // abebe.init("abebe",1000);
    kebede = new User("kebede", 3400);
    // alert(abebe.name);
    // alert(kebede.name);
    // kebede.init("kebede",3400);
    abyssinia.addUser(abebe);
    abyssinia.addUser(kebede);
    while (true) {
        choice1 = prompt("choose account\n 1.abebe\n2.kebede\nQ/q. quit");
        if (choice1 == "1") {

            while (true) {
                choice2 = prompt("welcome abebe\n what do u want\n1. balance\n2. withdraw\n3. deposit\n 4. transfer\n Q/q. quit");
                if (choice2 == "1") {
                    abebe.getbalance()
                }
                else {
                    if (choice2 == "2") {
                        abebe.withdraw()
                    }
                    else {
                        if (choice2 == "3") {
                            abebe.deposit()
                        }
                        else {

                            if(choice2=="q"||choice2=="Q"){
                                break
                            }
                            else{
                                if(choice2=="4"){
                                    abebe.transfer()
                                }
                            }

                        }
                    }
                }
            }

        }
        else{ if(choice1=="2") {
            while (true) {
                choice2 = prompt("welcome kebede\n what do u want\n1. balance\n2. withdraw\n3. deposit\n 4. transfer\nQ/q. to quit");
                if (choice2 == "1") {
                    kebede.getbalance()
                }
                else {
                    if (choice2 == "2") {
                        kebede.withdraw()
                    }
                    else {
                        if (choice2 == "3") {
                            kebede.deposit()
                        }
                        else {

                            if(choice2=="q"||choice2=="Q"){
                                break
                            }
                            else{
                                if(choice2=="4"){
                                    kebede.transfer()
                                }
                            }

                        }
                    }
                }
            }
        }else{
            break
        }

        }
    }



})()

