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
      tasks:['sass', 'uglify', 'cssmin']
      // spawn: false

    },

     sass: {
      options: {
            sourceMap: true
        },
    dist: {
      files: {
        'css/style.css': 'style.scss'
      }
    }
  },
  cssmin: {
  target: {
    files:  [{
      expand: true,
      cwd: 'css',
      src: 'style.css',
      dest: 'css/',
      ext: '.min.css'
    }]
  }
},

uglify: {
    my_target: {
      files: {
        'js/app.min.js': ['js/app.js']
      }
    }
  },

  imagemin: {
    dist: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'raw-img',
          src: ['*.{png,jpg,svg}'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'img/',
        }
      ]
    },
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('server',[  'connect', 'watch', 'imagemin' ]);
  };
