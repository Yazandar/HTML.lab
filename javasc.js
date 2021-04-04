
    var visitorName=' '+ prompt('Please Enter Your Name');
 
    alert('Hello'+visitorName);   

    var age = prompt('how old are you?');

  
    function myFunction(para1,para2) {
      document.write('visitor information is ',para1,"|||",para2 ,"years old")
      
    }
    
    while(age < 18){
      alert('you have to be over 18');
      age = prompt('how old are you?');
    }

    
  
    var favNumber=prompt('Whats your favorite number from 1 to 10?');

    

    for (i = 0; i < favNumber; i++) {
      document.write("<img src= 'https://freeiconshop.com/wp-content/uploads/edd/html-flat.png'/>");
    }

    

      myFunction(visitorName, age);
      
    