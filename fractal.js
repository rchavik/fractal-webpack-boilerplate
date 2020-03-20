'use strict';

const pkg = require('./package.json');

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Require Fractal CLI
 */
const logger = fractal.cli.console;

/*
 * Require Mandelbrot theme
 */
const mandelbrot = require('@frctl/mandelbrot');
//const customisedTheme = mandelbrot({});
const customisedTheme = require('mono-fractal')({});
fractal.web.theme(customisedTheme);

/*
 * Give your project a title.
 */
fractal.set('project.title', pkg.description);

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set("statuses", {
  wip: {
    label: "WIP",
    description: "Work in progress.",
    color: "#C90000"
  },
  ready: {
    label: "Ready",
    description: "Ready for approval.",
    color: "#FF9233"
  },
  done: {
    label: "Done",
    description: "Completed and approved.",
    color: "#29CC29"
  }
});
fractal.components.set('default.status', 'wip');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set("statuses", {
  wip: {
    label: "WIP",
    description: "Work in progress.",
    color: "#C90000"
  },
  draft: {
    label: "Draft",
    description: "Ready for approval.",
    color: "#FF9233"
  },
  done: {
    label: "Done",
    description: "Completed and approved.",
    color: "#29CC29"
  }
});
fractal.docs.set('default.status', 'wip');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell Fractal where to compile a static version of the style guide to.
 */
fractal.web.set("builder.dest", path.join(__dirname, "dist"));

/*
 * Browsersync options.
 */
fractal.web.set("server.syncOptions", {
  open: false,
  notify: false
  // files: ['src/**/*.hbs', 'src/**/*.yml', 'dist/**/*', 'static/**/*']
});

fractal.on("source:updated", (source, eventData) => {
  logger.log(`${eventData.path} was changed.`);
  logger.success("Update successful.");
});


/*
 * Setup Twig
 */
const twigAdapter = require('@frctl/twig')();
fractal.components.set('ext', '.twig');

/*
 * Adding helpers to Handlebars
 */
const engine = fractal.components.engine(twigAdapter);
