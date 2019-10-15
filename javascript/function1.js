//comparison operator
console.log("\n...............greater than operator ....................");
function greaterThan(value){
if(value>100){
return "value is greater than 100";
}
else{
    return "value is less than 100";
}
}

console.log(greaterThan(101));

console.log("\n...............less than operator...................."); 
function lessThan(value){
    if(value<100){
    return "value is less than 100";
    }
    else{
        return "value is greater than 100";
    }
    }
    
    console.log(lessThan(100));

    function greaterThanEquals(value){
        if(value>=100){
        return "100 or over";
        }
        else{
            return "less than 100";
        }
        }
        
        console.log(greaterThanEquals(90));
            
        function lessThanEquals(value){
            if(value<=100){
            return "100 or less than 100";
            }
            else{
                return "more than 100";
            }
            }
            
            console.log(lessThanEquals(50));

            console.log("\n...............logical operators...................."); 

            function logicalAnd(value){
                if(value<=100 &&value>=50){
                return "YES";
                }
                else{
                    return "NO";
                }
                }
                
                console.log(logicalAnd(50));

                function logicalOr(value){
                    if(value<10 || value>20){
                    return "outside";
                    }
                    else{
                        return "inside";
                    }
                    }
                  
                    console.log(logicalOr(15));

                    //ifelse chaining  

                    function ifElseChaining(value){
                        if(value<5){
                        return "less";
                        }
                        else if(value<10){
                            return "small";
                        }
                        else if(value<15){
                            return "large";
                        }
                        else if(value<20){
                            return "huge";
                        }
                        else{
                            return "not valid";
                        }
                    
                        }
                        
                        console.log(ifElseChaining(69));
    
//switch case
function switchCasefun(val){
    var ans=""
    switch (val) {
        case 1:
          ans = "alpha";
          break;
        case 2:
          ans = "beta";
          break;
        case 3:
          ans = "delta";
          break;
        default:
          ans = "Looking forward to the Weekend";
      }
      return ans;
}
console.log(switchCasefun(3));

    //sequential sizes

    function switchCaseSequential(val){
        var ans=""
        switch (val) {
            case 1:
            case 2:
            case 3:       
              ans = "low";
              break;
            case 4:
            case 5:
            case 6:       
              ans = "medium";
              break;
            case 7:
            case 8:
            case 9:       
              ans = "high";
              break;
        
            default:
              ans = "invalid choice";
          }
          return ans;
    }
    console.log(switchCaseSequential(2));
    console.log(switchCaseSequential(9));
    console.log(switchCaseSequential(10));
