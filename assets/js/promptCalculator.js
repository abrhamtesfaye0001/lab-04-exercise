
let add = function(){
    nums = prompt("enter numbers to add with , delimiter");
    sum = 0;
    nums.split(",").forEach(element => {
        sum+=parseInt(element);
    });
    
    alert(sum);
}
let substract = function(){
    nums = prompt("enter numbers to substract with , delimiter");
    output = parseInt(nums.split(",")[0]);
    nums.split(",").forEach((element,index) => {
        if(index!=0){
            output-=parseInt(element);
        }
     
    });
    
    alert(output);
}
let multiply = function(){
    nums = prompt("enter numbers to multiply with , delimiter");
    output = 1;
    nums.split(",").forEach(element => {
        output*=parseInt(element);
    });
    
    alert(output);
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
                alert("zero Error");
                err = 1;
                return
            }
                
            
        }
    });
    if(err==1){
        return
    }
    alert(output);
}


let max = function() {
    let numsArray = prompt("enter numbers with , delimiter").split(',');
    let nums = numsArray.map(function (element) {
        
        return parseFloat(element)
    });
    
    let maxNum = nums[0];
    for(let i=0;i<nums.length;i++){
        if (maxNum<nums[i]){
            maxNum=nums[i];
        }
    }
    alert(`your max is ${maxNum}`);
}

let min = function() {
    let numsArray = prompt("enter numbers with , delimiter").split(',');
    let nums = numsArray.map(function (element) {
        
        return parseFloat(element)
    });
    
    let minNum = nums[0];
    for(let i=0;i<nums.length;i++){
        if (minNum>nums[i]){
            minNum=nums[i];
        }
    }
    alert(`your min is ${minNum}`);
}

let average = function() {
    let numsArray = prompt("enter numbers with , delimiter").split(',');
    let nums = numsArray.map(function (element) {
        
        return parseFloat(element)
    });
    
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    if(nums.length==0){
        alert("empty prompt")
    }
    else{
        let averageNum = sum/nums.length;
        alert(`your min is ${averageNum}`);
    }
}

iife = (function(){
    // add();
    // multiply();
    // substract();
    // divide();
    
    while(true){
        p = prompt("what do u want to do\n 1. add\n 2. substract\n 3.multiply \n 4. divide \n 5. max \n 6. min\n 7. average\n Q/q. to exit")

        if(p=="q"||p=="Q"){
            break;
        }else{
            // if(p=="1"){
            //     add();
            // }
            // else{
            //     if(p=="2"){
            //         substract();
            //     }
            //     else{
            //         if(p=="3"){
            //             multiply();
            //         }
            //         else{
            //             if(p=="4"){
            //                 divide();
            //             }
            //         }
            //     }
            // }
            switch (p) {
                case "1":
                    add()
                    break;
                case "2":
                    substract()
                    break;
                case "3":
                    multiply()
                    break;
                case "4":
                    divide()
                    break;
                case "5":
                    max()
                    break;
                case "6":
                    min()
                    break;
                case "7":
                    average()
                    break;
                    
                default:
                    break;
            }
        }
        

    }
})()