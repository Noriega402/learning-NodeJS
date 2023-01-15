//se instalara paquete de gulp y un paquete para un servidor con gulp
// npm i gulp@latest gulp-server-livereload
//Para crear mi script personalizado en gulp ve a package.json -> scripts
const gulp = require('gulp');
const server = require('gulp-server-livereload');

//.task('NombreTarea', function => tarea a realizar)
gulp.task('build', function(callback){
    console.log('Construyendo el sitio web');
    setTimeout(callback, 1500);
});

gulp.task('serve', function(cb){
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});
