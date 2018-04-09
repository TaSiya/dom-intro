// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');

var call = 0 ;
var sms = 0 ;
var total = 0 ;
//add an event listener for when the add button is pressed

radioBillAddBtn.addEventListener('click', function(){
   radio_bill();
   if(total > 30 & total <= 50){
      totalTwo.classList.add("warning");
   }
   else if (total > 50){
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
      call = call + 2.75;
   }
   else if (billItemType === 'sms'){
      sms = sms + 0.75;
   }
   total = call + sms ;
   callTotalTwo.textContent = call;
   smsTotalTwo.textContent = sms ;
   totalTwo.textContent = total;
}
