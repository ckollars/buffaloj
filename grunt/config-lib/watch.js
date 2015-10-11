module.exports = {
  options: {
    livereload: true
  },
  configFiles: {
    files: [ 'Gruntfile.js', 'grunt/tasks.js', 'grunt/config-lib/*.js' ],
    options: {
      reload: true
    }
  },
  theme: {
    files: ['<%= pkg.themeFolder %>/*.php', '<%= pkg.themeFolder %>/template-partials/*.php']
  },
  sass: {
    files: ['<%= pkg.themeFolder %>/scss/**/*'],
    tasks: ['build-styles']
  },
  js: {
    files: ['<%= pkg.themeFolder %>/js/src/*.js', '<%= pkg.themeFolder %>/js/libs/**/*'],
    tasks: ['build-scripts']
  },
  html: {
    files: ['<%= pkg.themeFolder %>/*.html'],
    tasks: ['copy:devHTML']
  },
  images: {
    files: ['<%= pkg.themeFolder %>/img/**/*'],
    tasks: ['copy:devImages']
  }
};
