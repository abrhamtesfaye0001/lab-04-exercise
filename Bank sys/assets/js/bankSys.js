let user = {
    name:"",
    balance:0,
    accountNum:0,
    deposit : function(){
        amount = prompt("amount to deposit ");
        this.balance +=parseInt(amount);
        this.getbalance()
    },
    withdraw : function(){
        amount = prompt("amount to withdraw\n max->4000 min->100 ");
        if(parseInt(this.balance)>=0){
            if(parseInt(amount)<=4000 && parseInt(amount)>=100){
                this.balance -=parseInt(amount);
                this.getbalance()
            }else{
                console.log("respect the withdrawal limit");
            }
        }
        else{
            console.log(this.balance);
            console.log("you're broke");
        }
        
        
    }
    ,
    
     getbalance :function(){
        
        console.log("your balance is "+this.balance);
    }
    ,
    transfer: function(){
        amount = prompt("amount to transfer ");
        accountNumber = prompt("account Number to transfer to ");
        this.balance-=parseInt(amount);
        console.log(this.balance)
        console.log("kebede"+bank.userMap[parseInt(accountNumber)].balance)
        bank.userMap[parseInt(accountNumber)].balance +=parseInt(amount);
        console.log("your balance is "+this.balance);
    },
    init(name,balance){
        
        this.name = name;
        this.balance = parseInt(balance) ;
    }
    
}

let bank = {
    name: "Abyssinia",
    userMap:{},
    
    addUser: function(user){
        user.id =  Object.keys(this.userMap).length;
        this.userMap[user.id]=user;
    }
}



let iife=(function(){
    abyssinia = bank;
    abebe =  user;
    abebe.init("abebe",1000);
    kebede =  user;
    console.log(abebe.name);
    console.log(kebede.name)
    kebede.init("kebede",3400);
    abyssinia.addUser(abebe);
    abyssinia.addUser(kebede);
    
    choice1 = prompt("choose account\n 1.abebe\n2.kebede");
    if(choice1=="1"){
        
    while(true){
        choice2 = prompt("welcome abebe\n what do u want\n1. balance\n2. withdraw\n3. deposit\n 4. transfer"); 
            if(choice2 == "1"){
                abebe.getbalance()
            }
            else{
                if(choice2 == "2"){
                abebe.withdraw()
                }
                else{
                    if(choice2 == "3"){
                        abebe.deposit()
                    }
                    else{
                        
                            abebe.transfer()
                        
                    }
                }
            }
        }
        
    }
    else{
        while(true){
            choice2 = prompt("welcome kebede\n what do u want\n1. balance\n2. withdraw\n3. deposit\n 4. transfer"); 
            if(choice2 == "1"){
                kebede.getbalance()
            }
            else{
                if(choice2 == "2"){
                kebede.withdraw()
                }
                else{
                    if(choice2 == "3"){
                        kebede.deposit()
                    }
                    else{
                        
                            kebede.transfer()
                        
                    }
                }
            }
        }
        
    }
    

})()


