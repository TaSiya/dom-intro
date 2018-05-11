
function Factory(){
   var call1 = 0.00 ;
   var sms1 = 0.00 ;
   var total1 = 0.00 ;

   function text_bill(bill){
      if(bill === 'sms'){
         sms1 = sms1 + 0.75 ;
      }
      else if(bill=== 'call'){
         call1 = call1 + 2.75
      }
      total1 = sms1 + call1;
   }

   function getTotal(){
      return total1 ;
   }

   function getCall(){
      return call1;
   }

   function getSms(){
      return sms1;
   }

   return{
      calculations : text_bill,
      grandTotal : getTotal,
      getCalls : getCall,
      getSmses : getSms
   }
}
