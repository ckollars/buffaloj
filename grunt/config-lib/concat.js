module.exports = {
  options: {
    separator: ';',
    stripBanners: true
  },
  build: {
    src: ['<%= pkg.bower %>/jquery/dist/jquery.js', '<%= pkg.themeFolder %>/js/libs/**/*', '<%= pkg.themeFolder %>/js/src/*.js', '!<%= pkg.themeFolder %>/js/libs/modernizr.min.js', '!<%= pkg.themeFolder %>/js/libs/picturefill.min.js'],
    dest: '<%= pkg.themeFolder %>/js/dist/compiled.js'
  }
};
