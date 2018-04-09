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
   radio_bill();
   if(totalTwo.textContent > 30 & totalTwo.textContent <= 50){
      totalTwo.classList.add("warning");
   }
   else if (totalTwo.textContent > 50){
   totalTwo.classList.add("danger");
   }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function radio_bill(){
   var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
   }
   if(billItemType === 'call'){
      callTotalTwo.textContent = parseFloat(callTotalTwo.textContent) + 2.75;
   }
   else if (billItemType === 'sms'){
      smsTotalTwo.textContent = parseFloat(smsTotalTwo.textContent) + 0.75;
   }

   totalTwo.textContent = parseFloat(callTotalTwo.textContent) + parseFloat(smsTotalTwo.textContent);
}
