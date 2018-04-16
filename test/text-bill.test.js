describe('Text bill widget', function(){

  describe('Checks the total when added all calls sms(s) made', function(){
    it('If the user entered call and sms once each and press the add button. The total will be R3.50', function(){
       var textBillReferenceTotal1 = Factory();
       textBillReferenceTotal1.calculations2("call");
       textBillReferenceTotal1.calculations2("sms");
       assert.equal(textBillReferenceTotal1.grandTotal2(),3.50);
    });

    it('If the user press the add button 3 times for call and 3 for sms. The total will be R10.50', function(){
        var textBillfactoryReferenceTotal2 = Factory();
       textBillfactoryReferenceTotal2.calculations2("call");
       textBillfactoryReferenceTotal2.calculations2("sms");
       textBillfactoryReferenceTotal2.calculations2("call");
       textBillfactoryReferenceTotal2.calculations2("sms");
       textBillfactoryReferenceTotal2.calculations2("call");
       textBillfactoryReferenceTotal2.calculations2("sms");
       assert.equal(textBillfactoryReferenceTotal2.grandTotal2(),10.50);
    });
  });

  describe('Checks if the calls get updated', function(){
    it('suppose to add all calls only excluding the smses and give total',function(){
        var textBillReferenceCall1 = Factory();
        textBillReferenceCall1.calculations2("call");
        textBillReferenceCall1.calculations2("sms");
        textBillReferenceCall1.calculations2("call");
        textBillReferenceCall1.calculations2("sms");
        textBillReferenceCall1.calculations2("call");
        textBillReferenceCall1.calculations2("sms");
        assert.equal(textBillReferenceCall1.getCalls2(),8.25);
    });

    it('suppose to add all calls only excluding the smses and give total',function(){
        var textBillReferenceCall2 = Factory();
        textBillReferenceCall2.calculations2('call');
        textBillReferenceCall2.calculations2('call');
        textBillReferenceCall2.calculations2('call');
        textBillReferenceCall2.calculations2('sms');
        textBillReferenceCall2.calculations2('call');
        textBillReferenceCall2.calculations2('call');
        textBillReferenceCall2.calculations2('sms');
        textBillReferenceCall2.calculations2('sms');
        textBillReferenceCall2.calculations2('sms');
        textBillReferenceCall2.calculations2('call');
        textBillReferenceCall2.calculations2('sms');

        assert.equal(textBillReferenceCall2.getCalls2(),16.5)
    });
  });

  describe('Checks if the smses get updated', function(){
    it('suppose to add all sms only excluding the calls and give total',function(){
        var textBillReferenceSms1 = Factory();
        textBillReferenceSms1.calculations2("call");
        textBillReferenceSms1.calculations2("sms");
        textBillReferenceSms1.calculations2("call");
        textBillReferenceSms1.calculations2("sms");
        textBillReferenceSms1.calculations2("call");
        textBillReferenceSms1.calculations2("sms");
        assert.equal(textBillReferenceSms1.getSmses2(),2.25);
    });

    it('suppose to add all sms only excluding the calls and give total',function(){
        var textBillReferenceSms2 = Factory();
        textBillReferenceSms2.calculations2('call');
        textBillReferenceSms2.calculations2('call');
        textBillReferenceSms2.calculations2('call');
        textBillReferenceSms2.calculations2('sms');
        textBillReferenceSms2.calculations2('call');
        textBillReferenceSms2.calculations2('call');
        textBillReferenceSms2.calculations2('sms');
        textBillReferenceSms2.calculations2('sms');
        textBillReferenceSms2.calculations2('sms');
        textBillReferenceSms2.calculations2('call');
        textBillReferenceSms2.calculations2('sms');

        assert.equal(textBillReferenceSms2.getSmses2(),3.75)
    });
  });

});
