var gulp = require('gulp');
var myPlugin = require('./gulp-my-plugin'); // 先頭に./を記述

gulp.task('default',function(){
  // use normally
  return gulp.src(['src/*'])
    .pipe(myPlugin())
    .pipe(gulp.dest('dist/'));
  // use with stream
  // return gulp.src(['src/*'],{buffer:false})
  //   .pipe(myPlugin())
  //   .pipe(gulp.dest('dist/'));
});
