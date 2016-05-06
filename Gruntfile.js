"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks('grunt-spritesmith');
  
  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },
    
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 2 versions",
            "last 3 Chrome versions",
            "last 3 Firefox versions",
            "last 2 Opera versions",
            "last 2 Edge versions"
          ]})
        ]
      },
      style: {src: "build/css/*.css"}
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"],
        options: {spawn: false}
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "csso"],
        options: {
            spawn: false
          }
      },
      js: {
        files: ["js/**/*.js"],
        tasks: ["copy:js"],
        options: {
            spawn: false
          }
      }
    },
  
    
    browserSync: {
      server: {
        bsFiles: {
          src: ["build/*.html", "build/css/*.css"]
        },
        options: {
          server: './build',
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },
    
    clean: {
      build: ["build"]
    },
    
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html",
            "video/**"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          src: ["js/**"],
          dest: "build"
        }]
      }
    },
    
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },
    
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },
    
    sprite:{
      diagram: {
        src: "img/diagram/*.png",
        dest: "img/sprite-diagram.png",
        destCss: "less/sprites/sprite-diagram.less",
        padding: 2
      }
    }

  });
  
  grunt.registerTask("server", ["browserSync", "watch"]);
  grunt.registerTask("build",[
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "imagemin"
      

  ]);


};
