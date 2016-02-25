gulp-harden
===========

A gulp task that converts soft tabs (spaces) to hard tabs (tabs).

Based on [gulp-soften](https://github.com/JacksonGariety/gulp-soften) by [@JacksonGariety](https://github.com/JacksonGariety).

## Usage

### **`harden([size])`**

`harden()` takes a single parameter, size, which is the number of spaces per tab.

It returns a stream for use in a streaming system like [gulp.js](http://gulpjs.com).

## Example

```javascript
// Gulpfile.js
var gulp = require('gulp')
  , harden = require('gulp-harden')

gulp.task('harden', function () {
  gulp.src('./**/*.js')
      .pipe(harden(2))
      .pipe(gulp.dest('./'))
})
```