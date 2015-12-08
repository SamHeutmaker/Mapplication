module.exports = function (grunt) {

grunt.registerTask('default', ['browserSync', 'watch']);

  grunt.initConfig({



    browserSync: {
  default_options: {
    bsFiles: {
      src: [
        "www/styles/css/main.css",
        "www/styles/css/control.css",
        "www/templates/*.html"
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: "./www"
      } 
    }
  }
},

    // Watch task config
    watch: {
      sass: {
        files: "www/styles/sass/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
        dev: {
            files: {
                // destination         // source file
                "www/styles/css/main.css" : "www/styles/sass/main.scss",
                "www/styles/css/control.css" : "www/styles/sass/control.scss"
            }
        }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
}