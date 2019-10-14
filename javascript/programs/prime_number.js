function checkPrime(num) { 
              
    var  i, flag = true; 

    for (i = 2; i <= num - 1; i++) 
        if (num % i == 0) { 
            flag = false; 
            break; 
        } 
          
    // Check and display output 
    if (flag == true) 
        console.log(num + " is prime number"); 
    else
        console.log(num + " is not prime number"); 
} 

checkPrime(3);
checkPrime(4);