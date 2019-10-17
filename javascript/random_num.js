
//generate random number 

function randomfun(){ 
    return Math.random();
    }

    console.log(randomfun());

//random number between 0 to 19

function randomNum(){ 
    return Math.floor(Math.random()*20);
    }

    console.log("random number between 0 to 19= "+randomNum());

// random number within a range

function randomNumRange(min,max){ 

    return Math.floor(Math.random()*(max-min+1))+min;
    }

    console.log("random number within a range= "+randomNumRange(1,5));
