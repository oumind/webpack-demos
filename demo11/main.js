/*eslint-disable*/
import load from 'bundle-loader!./a.js';

load(function(file) {
  document.open();
  document.write('<h1>' + file.default + '</h1>');
  document.close();
});
