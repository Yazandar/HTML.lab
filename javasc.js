
  function ask(par1,par2,par3) {
    par1= prompt("whats your name?");
    par2 = prompt("how old are you?");
    while (par2<18) {
        alert('you have to be over 18');
        par2= prompt("how old are you?");
    }
    para3= prompt("whats you favorit number from 1 to 10?")

    console.log('visitor name is'+' '+par1+' '+par2+'years old')
    }

      function logos(num) {
        num=prompt('Rate HTML, 1-5');
        for (i = 0; i < num; i++) {
        document.write("<img src= 'https://freeiconshop.com/wp-content/uploads/edd/html-flat.png'/>");
        }
      }

    

    ask();
    logos();
    
    

    
  
