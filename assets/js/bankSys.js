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
        this.balance -= parseInt(amount);

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
    },
    addUserPrompt: function () {
        userName = prompt("new user name");
        userAmount = Number.parseInt(prompt("amount "));
        let newUser = new User(userName, userAmount);
        newUser.accountNumber = Object.keys(this.userMap).length;
        this.userMap[newUser.accountNumber] = newUser;
        alert(`you added ${newUser.name} with ${newUser.balance} `)
        return
    }
}
function userChoice(bank) {

    let message = "enter ur account number \n";

    // for(user of new Map(Object.entries(bank.userMap))){
    //     message+=(user.accountNum+". "+user.name+"\n");
    // }

    let choice = prompt(message);
    userPrompts(bank, choice);

}

function userPrompts(bank, userId) {
    user = bank.userMap[userId];
    while (true) {
        choice2 = prompt(`welcome ${user.name} \n what do u want\n1. balance\n2. withdraw\n3. deposit\n 4. transfer\n Q/q. quit`);
        if (choice2 == "1") {
            user.getbalance()
        }
        else {
            if (choice2 == "2") {
                user.withdraw()
            }
            else {
                if (choice2 == "3") {
                    user.deposit()
                }
                else {

                    if (choice2 == "q" || choice2 == "Q") {
                        break
                    }
                    else {
                        if (choice2 == "4") {
                            user.transfer()
                        }
                    }

                }
            }
        }
    }
}

function bankPrompts(bank) {
    let choice1 = prompt("enter password");
    if (choice1 == "password") {
        while (true) {
            let choice2 = prompt("Welcome\n 1. Add User \n Q/q. quit");
            if (choice2 == "1") {
                bank.addUserPrompt();
            }
            else {
                break;
            }


        }
    }
    return ""

}

let iife = (function () {
    abyssinia = bank;
    let abebe = new User("abebe", 1000);
    // abebe.init("abebe",1000);
    let kebede = new User("kebede", 3400);
    // alert(abebe.name);
    // alert(kebede.name);
    // kebede.init("kebede",3400);
    abyssinia.addUser(abebe);
    abyssinia.addUser(kebede);

    while (true) {
        let choice0 = prompt("which one are you?\n 1.bank\n 2.user\n Q/q. quit");
        if (choice0 == "1") {
            bankPrompts(bank);
        }
        else {
            if (choice0 == "2") {

                userChoice(abyssinia);
            }
            else {
                break
            }
        }



    }
    // while (true) {
    //     choice1 = prompt("choose account\n 1.abebe\n2.kebede\nQ/q. quit");
    //     if (choice1 == "1") {

    //         while (true) {
    //             choice2 = prompt("welcome abebe\n what do u want\n1. balance\n2. withdraw\n3. deposit\n 4. transfer\n Q/q. quit");
    //             if (choice2 == "1") {
    //                 abebe.getbalance()
    //             }
    //             else {
    //                 if (choice2 == "2") {
    //                     abebe.withdraw()
    //                 }
    //                 else {
    //                     if (choice2 == "3") {
    //                         abebe.deposit()
    //                     }
    //                     else {

    //                         if(choice2=="q"||choice2=="Q"){
    //                             break
    //                         }
    //                         else{
    //                             if(choice2=="4"){
    //                                 abebe.transfer()
    //                             }
    //                         }

    //                     }
    //                 }
    //             }
    //         }

    //     }
    //     else{ if(choice1=="2") {
    //         while (true) {
    //             choice2 = prompt("welcome kebede\n what do u want\n1. balance\n2. withdraw\n3. deposit\n 4. transfer\nQ/q. to quit");
    //             if (choice2 == "1") {
    //                 kebede.getbalance()
    //             }
    //             else {
    //                 if (choice2 == "2") {
    //                     kebede.withdraw()
    //                 }
    //                 else {
    //                     if (choice2 == "3") {
    //                         kebede.deposit()
    //                     }
    //                     else {

    //                         if(choice2=="q"||choice2=="Q"){
    //                             break
    //                         }
    //                         else{
    //                             if(choice2=="4"){
    //                                 kebede.transfer()
    //                             }
    //                         }

    //                     }
    //                 }
    //             }
    //         }
    //     }else{
    //         break
    //     }

    //     }
    // }



})()

