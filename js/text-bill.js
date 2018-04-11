// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOne = document.querySelector('.totalOne');

var call1 = 0.00 ;
var sms1 = 0.00 ;
var total1 = 0.00 ;
//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', function(){
   text_bill(billTypeText);
   if(total1 > 30 & total1 < 50){totalOne.classList.add("warning");}
   else if (total1 > 50){totalOne.classList.add("danger");}
});
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function text_bill(bill){

   if(bill.value === 'sms'){
      sms1 = sms1 + 0.75 ;
   }
   else if(bill.value === 'call'){
      call1 = call1 + 2.75 ;
   }
   total1 = sms1 + call1;

   smsTotalOne.textContent = sms1.toFixed(2);
   callTotalOne.textContent = call1.toFixed(2);
   totalOne.textContent = total1.toFixed(2);
}
