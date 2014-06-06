OMRApp.service('NationwideInformationService', NationwideInformationService);
function NationwideInformationService($http) {
    this.getNationwideInformation = function(userCode, productCode, subscriberNumber,simcardNumber,setNationwideInformation){
        $http.post("http://10.89.104.17/api/getNationwideInformation", {
            "UserCode": userCode,
            "ProductDescription": productCode,
            "SubscriberNumber": subscriberNumber,
            "CardNumber": simcardNumber
        }).
        success(function(data, status){
            if(data.CurrentSubscriberNumber == undefined){
                data.CurrentSubscriberNumber = ""
            }
            if(data.CardNumber == undefined){
                data.CardNumber = ""
            }
            setNationwideInformation(data,status);
        }).
        error(function(data, status){
            setNationwideInformation(null,status);
        })
    }
}
