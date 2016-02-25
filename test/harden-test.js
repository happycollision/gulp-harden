var should = require('should')
  , harden = require('../index')
  , gulp = require('gulp')
  , map = require('map-stream')
  , fs = require('fs')
  , path = require('path')
  , cb = require('gulp-callback')
  
describe('harden', function () {
  var stream
    , result
    , tmp = path.join(__dirname, '/tmp')
  
  before(function () {
    fs.createWriteStream(tmp).end('\t\t\t\t')
  })
  
  it('should receive the stream', function (done) {
    stream = gulp.src(tmp).pipe(harden(2))
    done()
  })
  
  it('should pass along the stream', function (done) {
    stream.pipe(gulp.dest(__dirname)).pipe(cb(done))
  })
  
  it('should convert tabs to spaces', function (done) {
    fs.readFile(tmp, function (err, data) {
      data.toString().should.equal('        ')
      done()
    });
  })
  
  after(function () {
    fs.unlink(tmp)
  })
})