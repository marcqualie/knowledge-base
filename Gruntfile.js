module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-exec");

  grunt.initConfig({

    copy: {
      fontawesome: {
        files: [{
          expand: true,
          flatten: true,
          src: '_assets/bower/fontawesome/fonts/*',
          dest: 'assets/fonts/'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          loadPath: '_assets/bower',
          style: 'compressed',
        },
        files: {
          'assets/stylesheets/application.css': '_assets/stylesheets/application.scss'
        }
      }
    },

    exec: {
      jekyll_build: {
        cmd: "jekyll build --trace"
      }
    },

    watch: {
      source: {
        files: [
          "assets/images/*",
          "_assets/**/*",
          "_layouts/**/*",
          "_articles/**/*",
          "_data/**/*",
          "_config.yml",
          "*.html",
          "*.haml",
          "*.md"
        ],
        tasks: [
          'sass',
          'copy',
          "exec:jekyll_build"
        ]
      }
    }

  });

  grunt.registerTask('serve', [
    'sass',
    'copy',
    'exec:jekyll_build',
    'watch',
  ]);

};
