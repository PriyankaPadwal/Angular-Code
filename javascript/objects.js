//object

var ourObj={
    "key":"value",
    "name":"john",
    "age":20,
    "friends":["everything!"],
    11:"hello"
};

console.log(ourObj);
console.log(ourObj.age);
console.log(ourObj.friends);
console.log(ourObj['name']);
console.log(ourObj[11]);

//update obj
ourObj.name="jonas";
console.log(ourObj.name);

ourObj.address="pune";
console.log(ourObj);

//delete obj
console.log("................delete obj............");
delete ourObj.address;
console.log(ourObj);



//object looping

function objLooping(value){
var result=""
var obj={
"alpha":"jammu",
"bravo":"kashmir",
"charlie":"uri",
"delta":"punjab",
}
result=obj[value];
return result;
}
console.log(objLooping("bravo"));
console.log(objLooping("delta"));

//function obj check property

var myobj={
    name:"john",
    age:10
     }

function checkProperty(checkprop){
if(myobj.hasOwnProperty(checkprop)){
    return myobj[checkprop];
}
else{
    return "Not Found";
}
}
console.log(checkProperty("name"));
console.log(checkProperty("address"));

//nested object
console.log("...............nested obj...............");
var myStorage={

    "car":{
           inside:{
                passenger_seats:4,
                "music system":"radio"
              },
          outside:{
                 color:"red"
              }
        }
}
console.log(myStorage.car.inside["music system"]); //there is space in key thats why we use[]


//array of objects
var music=[{
    artist:"ram",
    title:"madhur sangit",
    formats:['CD']

     },
     {
        artist:"sita",
        title:"savan",
        formats:['CD','youtube video']
     }
    ]
    console.log(music[0]);
    console.log(music[0].artist);
    console.log(music[1].formats[0]);


