
     function alerts(param1) {
       alert(param1);
     } 
   

    var age = prompt('how old are you?');
    
    while(age < 18 ){
      alerts("you have to be over 18");
      age = prompt('how old are you?');
    }


    var visitorName=prompt('Please Enter Your Name');
 
    alerts('Hello'+" "+visitorName);


    var favNumber=prompt('Whats your favorite number from 1 to 10?');


  
    for (i = 0; i < favNumber; i++) {
      document.write("<img src= 'https://freeiconshop.com/wp-content/uploads/edd/html-flat.png'/>");
    }

    document.write(" ",visitorName," ",age,' years old');


      
      
      
    


    
  