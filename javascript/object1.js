//recod collection

var collection={
    1200:{
        artist:"rehman",
        album:"1990",
        track:['single track']
      },
      1300:{
        artist:"guljar",
        album:"2000",
        track:['savan','gujar']
      },
      1400:{
        artist:"shan",
        album:"2012",
        track:['rocks','barish']
      }

     };

     var collectioncopy=JSON.parse(JSON.stringify(collection));
    
    console.log(collectioncopy);

    function update(id,prop,value){
        if(value===""){
            delete collection[id][prop];
        }
        else if(value==="track"){
            collection[id][prop]=collection[id][prop] ||[];
            collection[id][prop].push([value]);
        }else{
            collection[id][prop]=value;
        }
          return collection;
    }
console.log(update(1400,"album","BABA"));
console.log(update(1300,"track","test"));
    