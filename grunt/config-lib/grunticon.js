module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= pkg.themeFolder %>/svgs/compressed',
      src: ['*.svg'],
      dest: '<%= pkg.themeFolder %>/css',
    }],

    options: {
      enhanceSVG: true,
      cssprefix: '.icon--',
      pngfolder: '<%= pkg.themeFolder %>/img/icon-png/',
      datasvgcss: 'icons.data.svg.css',
      datapngcss: 'icons.data.png.css',
      urlpngcss: 'icons.fallback.css',
    }
  }
};
