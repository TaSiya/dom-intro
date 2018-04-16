describe('Radio bill widget', function(){

  describe('Checks the total when added all calls sms(s) made', function(){
    it('If the user entered call and sms once each and press the add button. The total will be R3.50', function(){
       var factoryReferenceTotal1 = Factory();
       factoryReferenceTotal1.calculations2("call");
       factoryReferenceTotal1.calculations2("sms");
       assert.equal(factoryReferenceTotal1.grandTotal2(),3.50);
    });

    it('If the user press the add button 3 times for call and 3 for sms. The total will be R10.50', function(){
        var factoryReferenceTotal2 = Factory();
       factoryReferenceTotal2.calculations2("call");
       factoryReferenceTotal2.calculations2("sms");
       factoryReferenceTotal2.calculations2("call");
       factoryReferenceTotal2.calculations2("sms");
       factoryReferenceTotal2.calculations2("call");
       factoryReferenceTotal2.calculations2("sms");
       assert.equal(factoryReferenceTotal2.grandTotal2(),10.50);
    });
  });

  describe('Checks if the calls get updated', function(){
    it('suppose to add all calls only excluding the smses and give total',function(){
        var factoryReferenceCall1 = Factory();
        factoryReferenceCall1.calculations2("call");
        factoryReferenceCall1.calculations2("sms");
        factoryReferenceCall1.calculations2("call");
        factoryReferenceCall1.calculations2("sms");
        factoryReferenceCall1.calculations2("call");
        factoryReferenceCall1.calculations2("sms");
        assert.equal(factoryReferenceCall1.getCalls2(),8.25);
    });

    it('suppose to add all calls only excluding the smses and give total',function(){
        var factoryReferenceCall2 = Factory();
        factoryReferenceCall2.calculations2('call');
        factoryReferenceCall2.calculations2('call');
        factoryReferenceCall2.calculations2('call');
        factoryReferenceCall2.calculations2('sms');
        factoryReferenceCall2.calculations2('call');
        factoryReferenceCall2.calculations2('call');
        factoryReferenceCall2.calculations2('sms');
        factoryReferenceCall2.calculations2('sms');
        factoryReferenceCall2.calculations2('sms');
        factoryReferenceCall2.calculations2('call');
        factoryReferenceCall2.calculations2('sms');

        assert.equal(factoryReferenceCall2.getCalls2(),16.5)
    });
  });

  describe('Checks if the smses get updated', function(){
    it('suppose to add all sms only excluding the calls and give total',function(){
        var factoryReferenceSms1 = Factory();
        factoryReferenceSms1.calculations2("call");
        factoryReferenceSms1.calculations2("sms");
        factoryReferenceSms1.calculations2("call");
        factoryReferenceSms1.calculations2("sms");
        factoryReferenceSms1.calculations2("call");
        factoryReferenceSms1.calculations2("sms");
        assert.equal(factoryReferenceSms1.getSmses2(),2.25);
    });

    it('suppose to add all sms only excluding the calls and give total',function(){
        var factoryReferenceSms2 = Factory();
        factoryReferenceSms2.calculations2('call');
        factoryReferenceSms2.calculations2('call');
        factoryReferenceSms2.calculations2('call');
        factoryReferenceSms2.calculations2('sms');
        factoryReferenceSms2.calculations2('call');
        factoryReferenceSms2.calculations2('call');
        factoryReferenceSms2.calculations2('sms');
        factoryReferenceSms2.calculations2('sms');
        factoryReferenceSms2.calculations2('sms');
        factoryReferenceSms2.calculations2('call');
        factoryReferenceSms2.calculations2('sms');

        assert.equal(factoryReferenceSms2.getSmses2(),3.75)
    });
  });

});
