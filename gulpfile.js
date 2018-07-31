var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () {
    console.log('Boa - criaste uma task do Gulp.');    
});

gulp.task('html', function () {
    console.log('Imagina algo útil a fazer com o teu html aqui.');
});

gulp.task('styles', function () {
    //aqui definimos o ficheiro de origem e o de destino para ondem queremos direcionar
    // o return é para garantir que o gulp corre dado ser assincrono
    return gulp.src('.app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

    watch('./app/index.html', function () {
        gulp.start('html');        
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');       
    })

});