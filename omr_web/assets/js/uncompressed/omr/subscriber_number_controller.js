OMRApp.controller('SubscriberNumberController',['$scope', "NationwideInformationService", SubscriberNumberController]);

function SubscriberNumberController($scope, NationwideInformationService) {
    $scope.subscriber_number = ""
    $scope.simcard_number = ""

    $scope.getNationwideInformation = function(){
        // var validSubscriberNumber = validateSubscriberNumber($scope.subscriber_number);
        // var validSimcardNumber = validateSimcardNumber($scope.simcard_number);
        // if (validSubscriberNumber || validSimcardNumber) {
          var response = NationwideInformationService.getNationwideInformation("LLPALLAT",
              "PCN",
              $scope.subscriber_number,
              $scope.simcard_number,
              $scope.setNationwideInformation);
        // }

    }
    $scope.setNationwideInformation = function(data,status) {
            if(data.status == "success"){
                $scope.subscriber_number = data.CurrentSubscriberNumber
                $scope.simcard_number = data.CardNumber
                  if(data.CustomerGroupType == "normal") {
                      $scope.simtype = null;
                  } else {
                      $scope.simtype = data.CustomerGroupType;
                  }
            }
    }
}
