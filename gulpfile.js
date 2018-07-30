var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () {
    console.log('Boa - criaste uma task do Gulp.');    
});

gulp.task('html', function () {
    console.log('Imagina algo útil a fazer com o teu html aqui.');
});

gulp.task('styles', function () {
    console.log('Imagina Sass ou PostCss tasks a correr aqui.');
});

gulp.task('watch', function(){

    watch('./app/index.html', function () {
        gulp.start('html');        
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');       
    })

});