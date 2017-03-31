require.extensions['.css'] = function (module: any, filename: string) {};
require.extensions['.svg'] = function (module: any, filename: string) {
  module.exports = '<svg viewBox="0 0 19 19"><rect width=19 height=19 fill="red"></rect></svg>';
};
