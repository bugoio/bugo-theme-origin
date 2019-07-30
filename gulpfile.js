const { src, dest, watch, task } = require('gulp');
const clean = require('gulp-clean');
const { spawn } = require('child_process');
const prompt = require('prompt');
const readYaml = require('read-yaml');
const YAML = require('yamljs');
const compiler = require('webpack');
const webpack = require('webpack-stream');
// const axe = require('gulp-axe-webdriver');
// const jsonfile = require('jsonfile');

let name;


/*
 * Theme Name Prompt
 */

let theme_name_prompt = [
    {
        // The fist input text is assigned to username letiable.
        name: 'theme_name',
        // The username must match below regular expression.
        validator: /^[a-z0-9.\-]+$/,
        // If username is not valid then prompt below message.
        warning: 'Theme Name is not valid, it can only contain letters, numbers, dots or dashes'
    }
];

/*
 * buildTheme
 */

function buildTheme(cb) {
  // body omitted
  console.log("Buid Theme");
  prompt.start();

  // Prompt and get user input then display those data in console.
  prompt.get(theme_name_prompt, function (err, result) {
      if (err) {
          console.log(err);
          cb();
          return 1;
          
      } else {
        timestamp = Date.now();
        // Get user input from result object.
        baseTheme = result.theme_name;
        // Set the global name
        name = baseTheme + "-build" + '-' + timestamp;
        let message = "  Creating new theme : " + name;

        // Display user input in console log.
        console.log(message);

        const cpBase = spawn("cp", ['-rpv', './themes/'+baseTheme, './themes/'+name]);
        // Log message from Bugo
        cpBase.stdout.on('data', (data) => {
          console.log(`Copy: ${data}`);
        });

        // Log Errors
        cpBase.stderr.on('data', (data) => {
          console.log(`Copy Error: ${data}`);
        });

        // Log Exit
        cpBase.on('close', (code) => {
          console.log(`Copy: done`);
          // finish install
          src([
            './themes/bugo-templates/layouts/**/*',
          ])
            .pipe(dest('./themes/' + name + '/layouts', { overwrite: false }));

            src([
            './themes/bugo-src/assets/**/*',
          ])
            .pipe(dest('./themes/' + name + '/assets', { overwrite: false }));

          addConfigTheme(cb);
        });
      }
  });
}

/*
 * customTheme
 * -create blank theme
 */

function customTheme(cb) {
  prompt.start();

  // Prompt and get user input then display those data in console.
  prompt.get(theme_name_prompt, function (err, result) {
      if (err) {
          console.log(err);
          cb();
          return 1;
          
      } else {
        // Get user input from result object.
        name = result.theme_name;
        let message = "  Creating new theme : " + name;

        // Display user input in console log.
        console.log(message);

        const hugo = spawn("hugo", ['new', 'theme', name]);
        // Log message from Bugo
        hugo.stdout.on('data', (data) => {
          console.log(`Bugo: ${data}`);
        });

        // Log Errors
        hugo.stderr.on('data', (data) => {
          console.log(`Bugo Error: ${data}`);
        });

        // Log Exit
        hugo.on('close', (code) => {
          console.log(`Bugo exited with code ${code}`);
          // copy base files over to new build
          copyAssets(cb);
        });
      }
  });
}

/*
 * copyAssets
 * -copy assests from Bugo themes
 */

function copyAssets(cb) {
  if (name) {
    console.log('copying assets…');
    src([
        './themes/' + name + '/archetypes',
        './themes/' + name + '/layouts/*.*',
        './themes/' + name + '/layouts/_default/**/*',
        './themes/' + name + '/layouts/partials/**/*',
      ], { read: false })
      .pipe(clean());
    src('./themes/bugo-src/assets/scss/custom/**/*')
      .pipe(dest('./themes/' + name + '/assets/scss/custom'));
    addConfigTheme(cb);
  } else { 
    console.log('error no name');
    cb();
  }
}

/*
 * addConfigTheme
 * - add named theme to the top of the theme list in ./config.yaml
 */

function addConfigTheme(cb) {
  const config = '../../config.yaml';
  console.log('updating config file');
  readYaml(config, function(err, data) {
    if (err) throw err;
    data.theme.unshift(name)
    const yamlString = YAML.stringify(data,5,1);
    require('fs').writeFileSync('./config.yaml', yamlString);
  });
  cb();
}

function removeConfigTheme(cb) { 
  // Get user input from result object.
  const config = './config.yaml';
  console.log('updating config file');
  readYaml(config, function(err, data) {
    if (err) throw err;
    let tmp = data;
    var index = tmp.theme.indexOf(name);
    console.log('removing: ',index,tmp.theme);
    if (index !== -1) tmp.theme.splice(index, 1);
    console.log(tmp.theme);
    const yamlString = YAML.stringify(tmp,5,1);
    require('fs').writeFileSync('./config.yaml', yamlString);
    cb();
  });
}

function removeTheme(cb) { 
  prompt.start();
  // Prompt and get user input then display those data in console.
  prompt.get(theme_name_prompt, function (err, result) {
      if (err) {
          console.log(err);
          cb();
          return 1;
          
      }else {
        name = result.theme_name;
        removeConfigTheme();
      }
  });
}

function startHugo(cb) { 
  const config = './config.yaml';
  const content = '../../content';
  const data = '../../data';

  // c

  console.log('updating config file');

  readYaml(config, function(err, data) {
    if (err) throw err;
    let tmp = data;
    console.log('Bugo: Compiling .js files into ' + tmp.theme[0]);

    const jsWatcher = watch(['./assets/js/app.js'], function(cb) {
      cb();
    });

    jsWatcher.on('change', function (path, stats) {
      console.log(`File ${path} was changed`);
      src(path)
      .pipe(webpack({
        config : require('./webpack.config.js')
        }), compiler, function(err, stats) {
        /* Use stats to do more things if needed */
          console.log(e);
        })
      .pipe(dest('./assets/dist/'));
    });

    jsWatcher.on('add', function(path, stats) {
      console.log(`File ${path} was added`);
    });

    jsWatcher.on('unlink', function(path, stats) {
      console.log(`File ${path} was removed`);
    });

    const cssWatcher = watch(['../../public/style.theme.css'], function(cb) {
      cb();
    });

    cssWatcher.on('change', function (path, stats) {
      console.log(`File ${path} was changed`);
      src(path)
      .pipe(dest('./assets/dist/'));
    });

    cssWatcher.on('add', function(path, stats) {
      console.log(`File ${path} was added`);
    });

    cssWatcher.on('unlink', function(path, stats) {
      console.log(`File ${path} was removed`);
    });


    cb();
  });
}

function assets(cb) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')))
            }
            resolve()
        })
    })
}


function wcagTest(cb) { 
  const file = 'public/index.json'

  const result = jsonfile.readFile(file, function (err, obj) {
    if (err) console.error(err)
    console.dir(obj)
    var options = {
      errorOnViolation: false,
      folderOutputReport: 'wcag-tests',
      headless: true,
      saveOutputIn: 'all-pages',
      scriptTimeout: 60000,
      showOnlyViolations: false,
      tags: ['wcag2aaa', 'wcag2aa', 'wcag2a', 'best-practice'],
      threshold: 10000000,
      urls: obj,
      verbose: true
    };
    axe(options)
    cb()
  })
}

function installTheme(cb) {
  console.log("Begin Installation");
  src(['./_forestry/**/*'])
    .pipe(dest('../../.forestry/'));
  cb()
}

exports.installTheme = installTheme;
exports.buildTheme = buildTheme;
exports.customTheme = customTheme;
exports.removeTheme = removeConfigTheme;
exports.default = startHugo;
exports.access = wcagTest;
