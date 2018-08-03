     var result;
     function find_middle_letter( p_input){
         var strlength = 0;
         var midnum = 0;
         var bleven ;
         var rtnstr;
         strlength = p_input.length;
         bleven = isEven(strlength);
         midnum = Math.floor(strlength/2);
         if(bleven){
             rtnstr = p_input.substr(midnum-1,2);
         }else{
             
             rtnstr = p_input.charAt(midnum);
         }
         return rtnstr;
         
     }
      
     function isEven(value){
          if(value%2 == 0){
             return true;
         }else{
             return false;
         }
     }
   
     result = find_middle_letter('dish');
     console.log(result);

     result = find_middle_letter('seven');
     console.log(result);