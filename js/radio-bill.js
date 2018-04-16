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
   radio_bill_Dom();
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var refRadioFact = Factory();
function radio_bill_Dom(){
   var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;

      refRadioFact.calculations(billItemType);

   }

   callTotalTwo.textContent = refRadioFact.getCalls();
   smsTotalTwo.textContent = refRadioFact.getSmses();
   totalTwo.textContent = refRadioFact.grandTotal  ();

   if(refRadioFact.grandTotal() > 30 & refRadioFact.grandTotal() <= 50){
      totalTwo.classList.add("warning");
   }
   else if (refRadioFact.grandTotal() > 50){
   totalTwo.classList.add("danger");
   }
}
