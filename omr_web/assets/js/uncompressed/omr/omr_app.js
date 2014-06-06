var OMRApp;

OMRApp = angular.module('OMRApp',['ngRoute']);
OMRApp.constant('VERIFY_IDENTITY_URL', 'http://10.89.104.17/api/verifyIdentity');
OMRApp.constant('SEARCH_POSTCODE_URL', 'http://10.89.104.26:9200/postarea/_search');

var wireAllApp = function() {
  OMRApp.service('VerifyIDService', VerifyIDService);
  OMRApp.controller('VerifyIdentityController',['$scope', 'VerifyIDService', VerifyIdentityController]);

}

OMRApp.config(function($interpolateProvider, $routeProvider){
  $interpolateProvider.startSymbol('<[');
  $interpolateProvider.endSymbol(']>');

  $routeProvider
    .when('/registration_id_number', {
      controller:'RegistrationVerificationIDController',
      templateUrl:'registration_id_number.html'
    })
    .when('/registration_customer_profile',{
      controller:'RegistrationCustomerProfileController',
      templateUrl:'registration_customer_profile.html'
    })
    .when('/new_registration_subscriber_information', {
      controller: 'NewRegistrationSubscriberInformationController',
      templateUrl: 'new_registration_subscriber_information.html'
    })
    .otherwise({
      redirectTo:'/registration_id_number'
    });
});
