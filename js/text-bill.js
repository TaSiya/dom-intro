// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');
var totalOne = document.querySelector('.totalOne');
//Reference for the handlabar
var display = document.querySelector('.display');
var BillTemplate = document.querySelector('.BillTemplate').innerHTML;
//compiling the template
var compiledTemplate = Handlebars.compile(BillTemplate);

var factRef =  Factory();
//Events added to the page(s)
document.addEventListener('DOMContentLoaded', function(){
   var allData = {
      call : 0.00.toFixed(2),
      sms : 0.00.toFixed(2),
      total : 0.00.toFixed(2)
   };
   var compiledData = compiledTemplate(allData);
   display.innerHTML = compiledData;
});

addToBillBtn.addEventListener('click', function(){
   factRef.calculations(billTypeText.value);
   var allData = {
      call : factRef.getCalls(),
      sms : factRef.getSmses(),
      total : factRef.grandTotal()
   };
   var compiledData = compiledTemplate(allData);
   display.innerHTML = compiledData;

   var totals = factRef.grandTotal();
   if(totals > 30 & totals < 50){totalOne.classList.add("warning");}
   else if (totals > 50){totalOne.classList.add("danger");}
});
