import _ from 'lodash';
require('./ionic.style.js');
require('../lib/ionic/js/ionic.bundle.min.js');

angular.module('starter', ['ionic', require('../shared').name])

.run(($ionicPlatform) => {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('first', {
    url: '/first',
    template: require('../pages/first/first.html'),
    controller: require('../pages/first/first')
  })
  .state('list', {
    url: '/list',
    template: require('../pages/list/list.html'),
    controller: require('../pages/list/list')
  });

  $urlRouterProvider.otherwise('/first');
});