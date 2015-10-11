module.exports = {
  options: {
    sourceMap: true
  },
  build: {
    files: {
      '<%= pkg.themeFolder %>/js/dist/compiled.min.js': '<%= pkg.themeFolder %>/js/dist/compiled.js'
    }
  }
};
