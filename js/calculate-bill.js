
//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotal = document.querySelector('.billTotal');
//get a reference to the billString
var billString = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element


//link the function to a click event on the calculate button

function calculateBtnClicked(){
   var total = 0 ;
   var billList = billString.value.split(',');


   for(var i= 0 ; i < billList.length ; i++ ){
      if(billList[i].startsWith('c')){
         total += 2.75;
      }
      else if(billList[i].startsWith('s')){
         total += 0.75;
      }
   }
   billTotal.textContent = total.toFixed(2);
};

calculateBtn.addEventListener('click', function(){
   calculateBtnClicked();
   if(total > 20 & total <= 30){
      billTotal.classList.add("warning");
   }
   else if(total > 30){
      billTotal.classList.add("danger");
   }
});
