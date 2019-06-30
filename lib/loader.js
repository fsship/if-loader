var collect = require('./collect')
var generate = require('./generate')
const loaderUtils = require('loader-utils')
module.exports = function(source) {
  this.cacheable()
  const options = loaderUtils.getOptions(this)
  if (!options['if-loader']) {
    //this.emitError('if-loader config undefined')
  }
  var coll = collect(source);
  
  if (coll.length) {
    source = generate.call(this, source, coll)
  }
  return source
}
