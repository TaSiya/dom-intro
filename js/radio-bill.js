// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var totalTwo = document.querySelector('.totalTwo');

//Reference for the BillTemplate
var displayTwo = document.querySelector('.displayTwo');
var BillTemplate = document.querySelector('.BillTemplate').innerHTML;
var compiledTemplate = Handlebars.compile(BillTemplate);

var refRadioFact = Factory();
//add an event listener for when the add button is pressed
document.addEventListener('DOMContentLoaded', function(){
   var data = {
      call : 0.00.toFixed(2),
      sms : 0.00.toFixed(2),
      total : 0.00.toFixed(2)
   };
   var compiledData = compiledTemplate(data);
   displayTwo.innerHTML = compiledData;
});

radioBillAddBtn.addEventListener('click', function(){
   var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
      refRadioFact.calculations(billItemType);
   }

   var data ={
      call : refRadioFact.getCalls(),
      sms : refRadioFact.getSmses(),
      total : refRadioFact.grandTotal()
   }
   var compiledDataTwo = compiledTemplate(data);
   displayTwo.innerHTML = compiledDataTwo;

   var totalsTwo = refRadioFact.grandTotal();

   if(totalsTwo > 30 && totalsTwo <= 50){
      totalTwo.classList.add("warning");
   }
   else if (totalsTwo > 50){
   totalTwo.classList.add("danger");
   }
});
