describe('Text bill widget', function(){

  describe('Checks the total when added all calls sms(s) made', function(){
    it('If the user entered call and sms once each and press the add button. The total will be R3.50', function(){
        var factoryReferenceTotal1 = Factory();
       factoryReferenceTotal1.calculations("call");
       factoryReferenceTotal1.calculations("sms");
       assert.equal(factoryReferenceTotal1.grandTotal(),3.50);
    });

    it('If the user press the add button 3 times for call and 3 for sms. The total will be R10.50', function(){
        var factoryReferenceTotal2 = Factory();
       factoryReferenceTotal2.calculations("call");
       factoryReferenceTotal2.calculations("sms");
       factoryReferenceTotal2.calculations("call");
       factoryReferenceTotal2.calculations("sms");
       factoryReferenceTotal2.calculations("call");
       factoryReferenceTotal2.calculations("sms");
       assert.equal(factoryReferenceTotal2.grandTotal(),10.50);
    });
  });

  describe('Checks if the calls get updated', function(){
    it('suppose to add all calls only excluding the smses and give total',function(){
        var factoryReferenceCall1 = Factory();
        factoryReferenceCall1.calculations("call");
        factoryReferenceCall1.calculations("sms");
        factoryReferenceCall1.calculations("call");
        factoryReferenceCall1.calculations("sms");
        factoryReferenceCall1.calculations("call");
        factoryReferenceCall1.calculations("sms");
        assert.equal(factoryReferenceCall1.getCalls(),8.25);
    });

    it('suppose to add all calls only excluding the smses and give total',function(){
        var factoryReferenceCall2 = Factory();
        factoryReferenceCall2.calculations('call');
        factoryReferenceCall2.calculations('call');
        factoryReferenceCall2.calculations('call');
        factoryReferenceCall2.calculations('sms');
        factoryReferenceCall2.calculations('call');
        factoryReferenceCall2.calculations('call');
        factoryReferenceCall2.calculations('sms');
        factoryReferenceCall2.calculations('sms');
        factoryReferenceCall2.calculations('sms');
        factoryReferenceCall2.calculations('call');
        factoryReferenceCall2.calculations('sms');

        assert.equal(factoryReferenceCall2.getCalls(),16.5)
    });
  });

  describe('Checks if the smses get updated', function(){
    it('suppose to add all sms only excluding the calls and give total',function(){
        var factoryReferenceSms1 = Factory();
        factoryReferenceSms1.calculations("call");
        factoryReferenceSms1.calculations("sms");
        factoryReferenceSms1.calculations("call");
        factoryReferenceSms1.calculations("sms");
        factoryReferenceSms1.calculations("call");
        factoryReferenceSms1.calculations("sms");
        assert.equal(factoryReferenceSms1.getSmses(),2.25);
    });

    it('suppose to add all sms only excluding the calls and give total',function(){
        var factoryReferenceSms2 = Factory();
        factoryReferenceSms2.calculations('call');
        factoryReferenceSms2.calculations('call');
        factoryReferenceSms2.calculations('call');
        factoryReferenceSms2.calculations('sms');
        factoryReferenceSms2.calculations('call');
        factoryReferenceSms2.calculations('call');
        factoryReferenceSms2.calculations('sms');
        factoryReferenceSms2.calculations('sms');
        factoryReferenceSms2.calculations('sms');
        factoryReferenceSms2.calculations('call');
        factoryReferenceSms2.calculations('sms');

        assert.equal(factoryReferenceSms2.getSmses(),3.75)
    });
  });

});
