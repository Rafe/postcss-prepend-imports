module.exports = (opts = {}) => ({
    postcssPlugin: 'postcss-prepend-imports',
    Root(root) {
        const { rule } = opts;
        if (!rule) {
            throw new Error('You must provide a rule option');
        }

        root.prepend(rule);
    }
});

module.exports.postcss = true;
