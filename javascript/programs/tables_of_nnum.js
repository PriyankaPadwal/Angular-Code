function printTable(from,to){
    var from=parseInt(from);
    var to=parseInt(to);
    var num;  
    for(var i=from; i<=to; i++){
        num=i;
      for(var j=1; j<=10; j++){
      console.log("\t"+num*j);
      
      }
     
  }
}

      printTable(4,5);
    