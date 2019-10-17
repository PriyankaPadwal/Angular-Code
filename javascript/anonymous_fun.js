//function has no name

var magic= function(){
    return new Date();
};

var magic1= () =>{
    return new Date();
};

const magic2= () => new Date();


var myConcat=(arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4]));

const increment =(function(){
 return function increment(number,value=1){
     return number+value;
 }

})();
console.log(increment(1,2));
console.log(increment(2));

