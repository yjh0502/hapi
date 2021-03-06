// Load modules

var Cacheable = require('./cacheable');
var Utils = require('../utils');


// Declare internals

var internals = {};


// Empty response (Base -> Generic -> Cacheable -> Empty)

exports = module.exports = internals.Empty = function () {

    Cacheable.call(this);
    this.variety = 'empty';
    this.varieties.empty = true;

    return this;
};

Utils.inherits(internals.Empty, Cacheable);


