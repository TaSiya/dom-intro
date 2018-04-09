// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');
//add an event listener for when the add button is pressed

radioBillAddBtn.addEventListener('click', function(){
   radio_bill(billItemTypeRadio);
   if(totalTwo.textContent > 30 & totalTwo.textContent < 50){
      document.querySelector('.orange').style.background= 'orange';
   }
   else if (totalTwo.textContent > 50){
   document.querySelector('.orange').style.background = 'red';
   }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function radio_bill(bill){
   //bill =
   if(bill.value === 'call'){
      callTotalTwo.textContent = parseFloat(callTotalTwo.textContent) + 2.75;
   }
   else if (bill.value === 'sms'){
      smsTotalTwo.textContent = parseFloat(smsTotalTwo.textContent) + 0.75;
   }

   totalTwo.textContent = parseFloat(callTotalTwo.textContent) + parseFloat(smsTotalTwo.textContent);
}
