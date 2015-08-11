module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-exec");

  grunt.initConfig({

    exec: {
      build: {
        cmd: "rake build"
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
          'exec:build'
        ]
      }
    }

  });

  grunt.registerTask('serve', [
    'exec:build',
    'watch',
  ]);

};
