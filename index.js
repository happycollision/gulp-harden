var map = require('map-stream')

module.exports = function harden(size) {
  var hardTab = '\t'
    , spaces = new Array(size + 1).join(' ')
    , softTab = new RegExp('^((?:' + spaces + ')+)(.*)','g')
  
  return map(function(file, callback) {
    try {
      file.contents = new Buffer(String(file.contents).replace(softTab, function(wholeString, p1, p2){
        var numTabs = p1.length / size
        var tabs = ''
        while (numTabs > 0) {
          tabs += hardTab;
          numTabs--
        }
        return tabs + p2;
      }))
    } catch (e) {
      console.warn('Error: ' + e.message)
    }
    callback(null, file)
  })
}