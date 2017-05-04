/* eslint-disable */
// import('./a').then(module => {
//   var content = module.default;
//   document.open();
//   document.write('<h1>' + content + '</h1>');
//   document.close();
// })

require.ensure(['./a'], function(require) {
  var content = require('./a').default;
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
});
