var postcss = require("postcss");
var customProperties = require("postcss-custom-properties");
var prependRule = require("../");

// postcss-prepend-rule options:
var OPTIONS = {
    path: '__tests__/',
    rule: ['@layer colors']
};

function run(input, output, plugins) {
    return postcss(plugins).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Prepends colors.css', () => {
    return run(
    	'.main { background: var(--background-default); }',
    	'@layer colors;\n .main { background: var(--background-default); }',
        [ prependRule(OPTIONS) ]
    );
});

it('Prepends colors.css + parse variables', () => {
    return run(
        '.main { background: var(--background-default); }',
        '.main { background: #ccc; }',
        [ prependRule(OPTIONS), customProperties() ]
    );
});
