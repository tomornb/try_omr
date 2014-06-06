describe('NationwideInformationService', function() {
  var service;

  beforeEach(function(){
    module('OMRApp');
    inject(function(NationwideInformationService){
      service = NationwideInformationService;
    })
  });
});
