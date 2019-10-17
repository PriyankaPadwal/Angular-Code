//prevent object mutation use freeze Object

function freezeObject(){
"use strictly";

const MATH_CONSTANTS={
    PI:3.14
}
 Object.freeze(MATH_CONSTANTS);

try {
    MATH_CONSTANTS.PI=99;     //cannot asign readonly property
    
} catch (ex) {
    console.log(ex);
}
return MATH_CONSTANTS.PI;

}

const PI=freezObject();  
console.log(PI);