// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOne = document.querySelector('.totalOne');
//Reference to my template
var textBillTemplate = document.querySelector('.textBillTemplate').textContent;

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', function(){
   text_Dom();
});

var factRef =  Factory();

function text_Dom(){
   factRef.calculations(billTypeText.value);
   var compiledTemplate = Handlebars.compile(textBillTemplate);

   //Option 1
   // var allData = {
   //    call : factRef.getCalls(),
   //    sms : factRef.getSmses(),
   //    total : factRef.grandTotal()
   // };

   //Option 2
   var callData ={call : factRef.getCalls()};
   var smsData = {sms : factRef.getSmses()};
   var totalData = {total : factRef.grandTotal()};

   callTotalOne.textContent = compiledTemplate(callData);
   smsTotalOne.textContent = compiledTemplate(smsData);
   totalOne.textContent = compiledTemplate(totalData);

   var totals = compiledTemplate(totalData);
   if(totals > 30 & totals < 50){totalOne.classList.add("warning");}
   else if (totals > 50){totalOne.classList.add("danger");}

}
