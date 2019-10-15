//js function
function myFunction(){
console.log("inside the function");
}
myFunction();

//scope of function
var globalvar=10;

function fun1(){
var localvar=20;
console.log("local variable="+localvar);
console.log("global variable call inside the fun="+globalvar);

}
function fun2(){
   // console.log("local variable of another fun="+localvar);  //refference error
    console.log("global variable call inside the fun="+globalvar);
}

//console.log("local variable call outside the fun="+localvar);      //refference error
console.log("global variable call outside the fun="+globalvar);
fun1();
fun2();

//return a value from fun

function sum(a,b){
   return a+b;
}
var addition=sum(4,5);
console.log(addition);

//stand in line

function nextInLine(arr,item){
   arr.push(item);
   return arr.shift();

}

var arr=[1,2,3,4];
console.log("\n after fun call array is= "+arr);
console.log("after fun call array is= "+JSON.stringify(arr));
console.log(nextInLine(arr,5));
console.log("after fun call array is= "+JSON.stringify(arr));

//return boolean value
function fun3(isThatTrue){ // pass var as true error identify reffrence
if(isThatTrue){
    return "yes ,its true";
}
else{
    return "No ,its false";
}

}
console.log("value is = "+fun3(true));

//equality
function fun4(value){ // pass var as true error identify reffrence
    if(value==12){
        return "Equals";
    }
    else{
        return "Not equals";
    }
    }
    console.log(fun4(12));
    console.log(fun4('12'));

//strict equlity
    function fun5(value){ // pass var as true error identify reffrence
        if(value===12){
            return "strictly Equals";
        }
        else{
            return "Not equals";
        }
        }
        console.log(fun5(12));
        console.log(fun5('12'));
    