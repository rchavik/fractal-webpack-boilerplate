# Fractal Webpack Boilerplate

Originally from: https://github.com/carlpihl1/fractal-webpack-boilerplate

Modified to strip things not needed at this time and use mono-fractal and
parts of fratomic

To prepare everything check out the project and run:<br>
`npm install`

To start a local dev server that updates when either fractal content or assets (styles, scripts, images, etc) are changed:<br>
`npm run dev`

To build files for deployment:<br>
`npm run build`

## What's in here

### Fractal

The [Fractal](https://fractal.build/) config in here sets up a build directory, some default statuses for components and docs, prepares for theme customization and adds in some handlebars helpers (based on [this](https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional/31632215#31632215)).

### Webpack

[Webpack](https://webpack.js.org/) does a bunch of things:

Webpack has `assets/scripts/main.js` as the main entry point.

Styles are extracted using [css-loader](https://github.com/webpack-contrib/css-loader), [postcss-loader](https://github.com/postcss/postcss-loader) and [sass-loader](https://github.com/webpack-contrib/sass-loader). [Postcss](https://postcss.org/) runs [autoprefixer](https://github.com/postcss/autoprefixer) and [postcss-object-fit-images](https://github.com/ronik-design/postcss-object-fit-images). Styles are then extracted to a file by [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).

Font files are extracted with [file-loader](https://github.com/webpack-contrib/file-loader).

Images are extraced with [url-loader](https://github.com/webpack-contrib/url-loader).

The `dist` and `public` directories are cleared by [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin).

Files are copied from `assets/_fractal` and `assets/images` to the corresponding public assets folder and from `assets/meta` to the public root by [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin).

When running webpack with the `dev` config [fractal-webpack-plugin](https://github.com/adamlindqvist/fractal-webpack-plugin) is used to run Fractal in dev mode alongside Webpack.

When using the `prod` config images are minified with [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) while code is minified with [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) and [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin).
