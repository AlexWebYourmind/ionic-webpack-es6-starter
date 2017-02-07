'use strict';

/**
 * Module dependencies
 */
require('../lib/ionic/js/ionic.bundle.min.js');

module.exports = angular

  .module('shared', [
    require('./services').name,
    require('./values').name
  ]);