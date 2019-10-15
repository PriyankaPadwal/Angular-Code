var array=[20,30,40];
console.log(array);
console.log(array[0]);

//nested array
var ourArray=[["priya",20],["prachi",23],[10,20]];


console.log("first array element="+ourArray[0][0]);

//modify array
array[0]=10;
console.log(array);

//add array elements
array.push([50]);
console.log("after push array is= "+array);
ourArray.push(['a','b']);
console.log("after push nested array is= "+ourArray);

//remove array elements from last index
array.pop();
console.log("after pop array is= "+array);
ourArray.pop();
console.log("after pop nested array is= "+ourArray);

//remove array eleents from 1st index
array.shift();
console.log("after shift array is= "+array);
//replace first index element
array.unshift(10);
console.log("unshift array is= "+array);

