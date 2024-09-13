var postcss = require('postcss');

module.exports = postcss.plugin('postcss-prepend-imports', function (opts) {
    opts = opts || {};

    return Once (root) {
        root.prepend(opts.rule || '');
    };
});
