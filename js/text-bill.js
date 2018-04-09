// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOne = document.querySelector('.totalOne');

var call = 0 ;
var sms = 0 ;
var total = 0 ;
//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', function(){
   text_bill(billTypeText);
   if(total > 30 & total < 50){totalOne.classList.add("warning");}
   else if (total > 50){totalOne.classList.add("danger");}
});
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function text_bill(bill){

   if(bill.value === 'sms'){
      sms = sms + 0.75 ;
   }
   else if(bill.value === 'call'){
      call = call + 2.75 ;
   }
   total = sms + call;

   smsTotalOne.textContent = sms;
   callTotalOne.textContent = call;
   totalOne.textContent = total;
}
