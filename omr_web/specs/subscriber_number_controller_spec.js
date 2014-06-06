describe('SubscriberNumberController', function() {
  var $scope;

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();

    NationwideInformationService = {
      getNationwideInformation: function(user,productCode,key){
        return response = {
          "status" : "success",
          "RegisterFlag" : false,
          "CustomerGroupType" : "normal",
          "CardNumber" : "8966181403446926629"

        }
      }
    }
    //Monitor service
    spyOn(NationwideInformationService, 'getNationwideInformation');

    var configuration = {$scope: $scope, NationwideInformationService: NationwideInformationService};
    $controller('SubscriberNumberController', configuration);
  }));


  it('should call nationwide information from service when input subscriber_number', function(){
    $scope.subscriber_number =  "66900022410";
    $scope.getNationwideInformation();
    expect(NationwideInformationService.getNationwideInformation).toHaveBeenCalled();
  });

  it('should set data from response when sucess and CustomerGroupType is Normal', function(){
    var response_data = {
      "CurrentSubscriberNumber" : "66900022410",
      "CardNumber" : "8966181403446926629",
      "CustomerGroupType" : "normal",
      "RegisterFlag" : false,
      "status" : "success"
    }
    $scope.setNationwideInformation(response_data);
    expect($scope.subscriber_number).toBe("66900022410");
    expect($scope.simcard_number).toBe("8966181403446926629");
    expect($scope.simtype).toBe(null);
  });

  // it('should set data from response when sucess and CustomerGroupType is Golden', function(){
  //   var response_data = {
  //     "CurrentSubscriberNumber" : "66900024440",
  //     "CardNumber" : "8966181308436956728",
  //     "CustomerGroupType" : "golden",
  //     "RegisterFlag" : false,
  //     "status" : "success"
  //   }
  //   $scope.setNationwideInformation(response_data);
  //   expect($scope.subscriber_number).toBe("66900024440");
  //   expect($scope.simcard_number).toBe("8966181308436956728");
  //   expect($scope.simtype).toBe("golden");
  // });
  //
  //
  it('should set data from response when sucess and CustomerGroupType is VIP', function(){
    var response_data = {
      "CurrentSubscriberNumber" : "66900020078",
      "CardNumber" : "8966181308436956728",
      "CustomerGroupType" : "vip",
      "RegisterFlag" : false,
      "status" : "success"
    }
    $scope.setNationwideInformation(response_data);
    expect($scope.subscriber_number).toBe("66900020078");
    expect($scope.simcard_number).toBe("8966181308436956728");
    expect($scope.simtype).toBe("vip");
  });

  // it('should reset existing data and set data from response when sucess and CustomerGroupType is VIP', function(){
  //   $scope.subscriber_number = '66900022414'
  //
  //   var response_data = {
  //     "CurrentSubscriberNumber" : "66900020078",
  //     "CardNumber" : "8966181308436956728",
  //     "CustomerGroupType" : "vip",
  //     "RegisterFlag" : false,
  //     "status" : "success"
  //   }
  //   $scope.setNationwideInformation(response_data);
  //   expect($scope.subscriber_number).toBe("66900020078");
  //   expect($scope.simcard_number).toBe("8966181308436956728");
  //   expect($scope.simtype).toBe("vip");
  //
  //
  //
  // });
});
