describe('Radio bill widget', function(){

  describe('Checks the total when added all calls sms(s) made', function(){
    it('If the user entered call and sms once each and press the add button. The total will be R3.50', function(){
       var factoryReferenceTotal1 = Factory();
       factoryReferenceTotal1.calculations("call");
       factoryReferenceTotal1.calculations("sms");
       assert.equal(factoryReferenceTotal1.grandTotal(),3.50);
    });

    it('If the user press the add button 3 times for call and 3 for sms. The total will be R10.50', function(){
        var factoryReferenceTotal = Factory();
       factoryReferenceTotal.calculations("call");
       factoryReferenceTotal.calculations("sms");
       factoryReferenceTotal.calculations("call");
       factoryReferenceTotal.calculations("sms");
       factoryReferenceTotal.calculations("call");
       factoryReferenceTotal.calculations("sms");
       assert.equal(factoryReferenceTotal.grandTotal(),10.50);
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
        var factoryReferenceCall = Factory();
        factoryReferenceCall.calculations('call');
        factoryReferenceCall.calculations('call');
        factoryReferenceCall.calculations('call');
        factoryReferenceCall.calculations('sms');
        factoryReferenceCall.calculations('call');
        factoryReferenceCall.calculations('call');
        factoryReferenceCall.calculations('sms');
        factoryReferenceCall.calculations('sms');
        factoryReferenceCall.calculations('sms');
        factoryReferenceCall.calculations('call');
        factoryReferenceCall.calculations('sms');

        assert.equal(factoryReferenceCall.getCalls(),16.50)
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
        var factoryReferenceSms = Factory();
        factoryReferenceSms.calculations('call');
        factoryReferenceSms.calculations('call');
        factoryReferenceSms.calculations('call');
        factoryReferenceSms.calculations('sms');
        factoryReferenceSms.calculations('call');
        factoryReferenceSms.calculations('call');
        factoryReferenceSms.calculations('sms');
        factoryReferenceSms.calculations('sms');
        factoryReferenceSms.calculations('sms');
        factoryReferenceSms.calculations('call');
        factoryReferenceSms.calculations('sms');

        assert.equal(factoryReferenceSms.getSmses(),3.75)
    });
  });

});
