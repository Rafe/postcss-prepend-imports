# PostCSS Prepend rule

[PostCSS] plugin to automatically prepend rule

Fork from https://github.com/ramonvictor/postcss-prepend-imports
Majority to handle the issue of Nextjs css order issue: https://github.com/vercel/next.js/issues/47585

[PostCSS]: https://github.com/postcss/postcss

**Example using postcss.config.json**

```json
{
  "plugins": [
    [
      "postcss-prepend-imports",
      {
        "rule": "@layer normalize, globals, custom-css"
      }
    ],
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ]
  ]
}
```

## Installation

```
npm install postcss-prepend-rule --save-dev
```

#### rule

Type: `string` (default: `[]`)

css text to prepend in all css files

------------------------------------
See [PostCSS] docs for examples for your environment.
