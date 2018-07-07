'use strict';

const fileDataManager = require('./fileDataManager');

module.exports = function (file, options) {
    return fileDataManager.byExtension(file, options)
};