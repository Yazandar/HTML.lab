
     function alerts(param1) {
       alert(param1);
     } 
    
     function info() {

      var age = prompt('how old are you?');

      while(age < 18 ){
      alerts("you have to be over 18");
      age = prompt('how old are you?');
      }

      var visitorName=prompt('Please Enter Your Name');
 
      alerts('Hello'+" "+visitorName);
      console.log(" ",visitorName," ",age,' years old');

    }

      function logos(num) {
      for (i = 0; i < num; i++) {
      document.write("<img src= 'https://freeiconshop.com/wp-content/uploads/edd/html-flat.png'/>");
        
        }
      }

    

    info();
    
    var favNum=prompt('Whats your favorite number from 1 to 10?');

    logos(favNum);
    
    

      
      
      
    


    
  