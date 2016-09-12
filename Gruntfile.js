module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    watch:{
      options: {
        livereload: true,
        spawn: false
      },
      // files:['site/**'],
      files:['*.html', '*.scss', '*.css', 'js/**'],
      tasks:['sass']
      // spawn: false

    },

     sass: {
      options: {
            sourceMap: true
        },
    dist: {
      files: {
        'css/style.css': 'main.scss'
      }
    }
  },
  cssmin: {
  target: {
    files:  [{
      expand: true,
      cwd: 'css',
      src: '*.css',
      dest: 'css/',
      ext: '.min.css'
    }]
  }
},
  connect: {
    server: {
      options: {
        port: 8000,
        // base: './site',
        base: '.',
        hostname: 'localhost',
        protocol: 'http',
        livereload: true,
        app: 'Firefox',
        // open: 'true'
      }
    }
  },

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('server',[  'connect', 'cssmin', 'watch' ]);
  };
