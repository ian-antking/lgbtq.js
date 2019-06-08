const Flags = require('./src/flags');
const Colors = require('./src/colors');

(function exportPride() {
  const Pride = {
    colors: Colors,
    flags: Flags,
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Pride;
  } else {
    window.Pride = Pride;
  }
}());
