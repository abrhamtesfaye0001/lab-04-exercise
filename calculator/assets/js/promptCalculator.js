
let add = function(){
    nums = prompt("enter numbers to add with , delimiter");
    sum = 0;
    nums.split(",").forEach(element => {
        sum+=parseInt(element);
    });
    
    console.log(sum);
}
let substract = function(){
    nums = prompt("enter numbers to substract with , delimiter");
    output = parseInt(nums.split(",")[0]);
    nums.split(",").forEach((element,index) => {
        if(index!=0){
            output-=parseInt(element);
        }
        
    });
    
    console.log(output);
}
let multiply = function(){
    nums = prompt("enter numbers to multiply with , delimiter");
    output = 1;
    nums.split(",").forEach(element => {
        output*=parseInt(element);
    });
    
    console.log(output);
}
let divide = function(){
    nums = prompt("enter numbers to divide with , delimiter");
    output = parseInt(nums.split(",")[0]);
    err = 0;
    nums.split(",").forEach((element,index) => {
        if(index!=0){
            if(element!=0){
                output/=parseInt(element);
                
            }
            else{
                console.log("zero Error");
                err = 1;
                return
            }
                
            
        }
    });
    if(err==1){
        return
    }
    console.log(output);
}

iife = (function(){
    // add();
    // multiply();
    // substract();
    // divide();
    
    while(true){
        p = prompt("what do u want to do\n 1. add\n 2. substract\n 3.multiply \n 4. divide")
        if(p=="1"){
            add();
        }
        else{
            if(p=="2"){
                substract();
            }
            else{
                if(p=="3"){
                    multiply();
                }
                else{
                    if(p=="4"){
                        divide();
                    }
                }
            }
        }

    }
})()