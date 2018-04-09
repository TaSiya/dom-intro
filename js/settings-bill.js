// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');
// get refences to all the settings fields
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
var settingBtnAdd = document.querySelector('.settingBtnAdd');
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings
var callCost = 2.55 ;
var smsCost = 0.65;
var warning = 30.00;
var critical = 65.00;
// create a variables that will keep track of all three totals.
var call = 0;
var sms = 0;
var total = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', function(){
   callCost = parseFloat(callCostSetting.value);
   smsCost = parseFloat(smsCostSetting.value);
   warning = parseFloat(warningLevelSetting.value);
   critical = parseFloat(criticalLevelSetting.value);
});
//add an event listener for when the add button is pressed
settingBtnAdd.addEventListener('click', function(){
   settings();
   if(total >= warning & total <critical){
      totalSettings.classList.add("warning");
   }
   else if (total >= critical){
   totalSettings.classList.add("danger");
   }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function settings(){
   var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
   if (checkedRadioBtn){
      var billItemSettings = checkedRadioBtn.value;
   }
   if(billItemSettings === 'call'){
      call = call + callCost;
   }
   else if (billItemSettings === 'sms'){
      sms = sms + smsCost;
   }
   total = call + sms ;
   callTotalSettings.textContent = call.toFixed(2);
   smsTotalSettings.textContent = sms.toFixed(2) ;
   totalSettings.textContent = total.toFixed(2);
}
