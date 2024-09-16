module.exports = (opts = {}) => ({
  postcssPlugin: 'postcss-prepend-rule',
  Once(root) {
    const { rule } = opts;
    if (!rule) {
      throw new Error('You must provide a rule option');
    }

    root.prepend(rule);
  }
});

module.exports.postcss = true;
