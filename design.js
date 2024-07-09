var bulb = 0;
 function findbulb()
  { if(bulb==0)
     { document.getElementById("image").src="sivan off.jpg";
      bulb=1;
      } 
        else{ 
            document.getElementById("image").src="img1.jpg";
             bulb=0;
          }
      }