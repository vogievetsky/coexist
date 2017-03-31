require.extensions['.css'] = function() {};
require.extensions['.svg'] = function() {
  module.exports = '<svg viewBox="0 0 19 19"><rect width=19 height=19 fill="red"></rect></svg>';
};
