'use strict';

/**
 * Module dependencies
 */
require('../../lib/ionic/js/ionic.bundle.min.js');

module.exports = angular

  .module('common.services', [])

  .service('GreetingService', require('./greeting.service'));