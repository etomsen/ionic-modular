(function(){
  'use strict';
  angular.module('app.login', ['etomsen.router', 'restapi']);
}());
// (function(){
//   'use strict';
//   angular.module('app.login', ['app.shared'])

//   .controller('LoginCtrl', function($scope, $ionicModal, $timeout) {
//     // Form data for the login modal
//     $scope.loginData = {};

//     // Create the login modal that we will use later
//     $ionicModal.fromTemplateUrl('templates/login.html', {
//       scope: $scope
//     }).then(function(modal) {
//       $scope.modal = modal;
//     });


//     // Triggered in the login modal to close it
//     $scope.closeLogin = function() {
//       $scope.modal.hide();
//     };

//     // Open the login modal
//     $scope.onLoginShow = function() {
//       console.log('LoginCtrl.onLoginShow');
//       $scope.modal.show();
//     };

//     // Perform the login action when the user submits the login form
//     $scope.doLogin = function() {
//       console.log('Doing login', $scope.loginData);

//       // Simulate a login delay. Remove this and replace with your login
//       // code if using a login system
//       $timeout(function() {
//         $scope.closeLogin();
//       }, 1000);
//     };
//     $scope.$on('event:app.loginShow', function(){
//       $scope.onLoginShow();
//     });
//   });
// }());