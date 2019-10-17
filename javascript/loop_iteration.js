//insert array element using loop
var myarray=[];
for(var i=0;i<6;i++)
{
    myarray.push(i);
}
console.log(" array element="+myarray);

//count backwords using for
var array=[];
for(var i=10;i>0;i-=2)
{
    array.push(i);
}
console.log(" array element="+array);

//iterate trough for loop

var ourarray=[20,30,40,50,60];
var elements=0;
for(var i=0;i<ourarray.length;i++){
    elements+=ourarray[i];          //addition
}
console.log(elements);

//nested for loop

function multiplication(arr){
    var result=1;
    for(var i=0;i<arr.length;i++){
     for(var j=0;j<arr[i].length;j++){
        result*=arr[i][j];
     }
    }
    return result;
}

var multarr=[[1,2],[1,1,1],[1]];
console.log(multiplication(multarr));

//do while loop

var arr1=[];
var i=10;

do{
 arr1.push(i);
 i++;
}while(i<5)

console.log(i,arr1);

//lookup property
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

    function lookup(name,prop){
        for(var i=0;i<music.length;i++){
            if(music[i].artist===name){
             return music[i][prop] || "no such property";
            }
    
        }
 return "no such record";
    }


console.log(lookup("ram","title"));

