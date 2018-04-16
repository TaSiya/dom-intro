describe('Text bill widget', function(){

  describe('Checks the total when added all calls sms(s) made', function(){
    it('If the user entered call and sms once each and press the add button. The total will be R3.50', function(){
       var textBillReferenceTotal1 = Factory();
       textBillReferenceTotal1.calculations("call");
       textBillReferenceTotal1.calculations("sms");
       assert.equal(textBillReferenceTotal1.grandTotal(),3.50);
    });

    it('If the user press the add button 3 times for call and 3 for sms. The total will be R10.50', function(){
        var textBillfactoryReferenceTotal = Factory();
       textBillfactoryReferenceTotal.calculations("call");
       textBillfactoryReferenceTotal.calculations("sms");
       textBillfactoryReferenceTotal.calculations("call");
       textBillfactoryReferenceTotal.calculations("sms");
       textBillfactoryReferenceTotal.calculations("call");
       textBillfactoryReferenceTotal.calculations("sms");
       assert.equal(textBillfactoryReferenceTotal.grandTotal(),10.50);
    });
  });

  describe('Checks if the calls get updated', function(){
    it('suppose to add all calls only excluding the smses and give total',function(){
        var textBillReferenceCall1 = Factory();
        textBillReferenceCall1.calculations("call");
        textBillReferenceCall1.calculations("sms");
        textBillReferenceCall1.calculations("call");
        textBillReferenceCall1.calculations("sms");
        textBillReferenceCall1.calculations("call");
        textBillReferenceCall1.calculations("sms");
        assert.equal(textBillReferenceCall1.getCalls(),8.25);
    });

    it('suppose to add all calls only excluding the smses and give total',function(){
        var textBillReferenceCall = Factory();
        textBillReferenceCall.calculations('call');
        textBillReferenceCall.calculations('call');
        textBillReferenceCall.calculations('call');
        textBillReferenceCall.calculations('sms');
        textBillReferenceCall.calculations('call');
        textBillReferenceCall.calculations('call');
        textBillReferenceCall.calculations('sms');
        textBillReferenceCall.calculations('sms');
        textBillReferenceCall.calculations('sms');
        textBillReferenceCall.calculations('call');
        textBillReferenceCall.calculations('sms');

        assert.equal(textBillReferenceCall.getCalls(),16.50)
    });
  });

  describe('Checks if the smses get updated', function(){
    it('suppose to add all sms only excluding the calls and give total',function(){
        var textBillReferenceSms1 = Factory();
        textBillReferenceSms1.calculations("call");
        textBillReferenceSms1.calculations("sms");
        textBillReferenceSms1.calculations("call");
        textBillReferenceSms1.calculations("sms");
        textBillReferenceSms1.calculations("call");
        textBillReferenceSms1.calculations("sms");
        assert.equal(textBillReferenceSms1.getSmses(),2.25);
    });

    it('suppose to add all sms only excluding the calls and give total',function(){
        var textBillReferenceSms = Factory();
        textBillReferenceSms.calculations('call');
        textBillReferenceSms.calculations('call');
        textBillReferenceSms.calculations('call');
        textBillReferenceSms.calculations('sms');
        textBillReferenceSms.calculations('call');
        textBillReferenceSms.calculations('call');
        textBillReferenceSms.calculations('sms');
        textBillReferenceSms.calculations('sms');
        textBillReferenceSms.calculations('sms');
        textBillReferenceSms.calculations('call');
        textBillReferenceSms.calculations('sms');

        assert.equal(textBillReferenceSms.getSmses(),3.75)
    });
  });

});
