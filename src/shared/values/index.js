'use strict';

/**
 * Module dependencies
 */
require('../../lib/ionic/js/ionic.bundle.min.js');

module.exports = angular

  .module('common.values', [])

  .value('ImagePath', require('./image_path.value'));