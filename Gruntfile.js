module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-exec");

  grunt.initConfig({

    exec: {
      precompile: {
        cmd: "rake assets:precompile"
      },
      build: {
        cmd: "bundle exec jekyll build --trace"
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
          'exec:precompile',
          'exec:build'
        ]
      }
    }

  });

  grunt.registerTask('serve', [
    'exec:precompile',
    'exec:build',
    'watch',
  ]);

};
