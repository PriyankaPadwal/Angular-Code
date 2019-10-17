//convert into integer
function convert(str){ 
    return parseInt(str);
    }

    console.log(convert("10"));

// use conditional ternary operator

//condition? if true:if false;

function ternary(a,b){ 

    return a==b ? true : false;
    }

    console.log(ternary(1,2));

//check multiple conditions

function ternary1(num){ 

    return num>0 ? "positive": num<0 ? "negative" : "zero";
    }

    console.log(ternary1(10));
    console.log(ternary1(0));