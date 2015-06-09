// Create a new module
var myModule = angular.module('myModule', ['appControllers']);

// // register a new service
// myModule.value('appName', 'MyCoolApp');

// // configure existing services inside initialization blocks.
// myModule.config(['$locationProvider', function($locationProvider) {
//   // Configure existing providers
//   $locationProvider.hashPrefix('!');
// }]);

var appControllers = angular.module('appControllers',[]);