//returning early pattern from functions

function abTest(a,b){
   if(a<0 ||b<0){
       return undefined;

   }
   return Math.pow(a,b);
    }
    
    console.log(abTest(2,2));
    console.log(abTest(2,-1));

//card counting
console.log(".................card counting............");
var count=0;
function cc(card){
 switch(card){
    case 2:
    case 3: 
    case 4:      
    case 5:
    case 6:
          count++;
          break;
     case 10:
     case 'J':
     case 'Q':
     case 'K':
     case 'A':       
          count--;
          break;
 }

 var holdbet='hold'
 if(count>0){
     holdbet='bet'
 }
 return count+" "+holdbet;

}

cc(2);cc(3);cc(6);cc('K');cc('A')


console.log(cc(4));



