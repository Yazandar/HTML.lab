
<<<<<<< HEAD
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
    
    

      
      
      
    
=======
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
>>>>>>> 77ef01023d0230d20e78d37ec3385df56fc401ee

    

    for (i = 0; i < favNumber; i++) {
      document.write("<img src= 'https://freeiconshop.com/wp-content/uploads/edd/html-flat.png'/>");
    }

    

<<<<<<< HEAD
    
  
=======
      myFunction(visitorName, age);
      
    
>>>>>>> 77ef01023d0230d20e78d37ec3385df56fc401ee
