'use strict';

const fs = require( 'fs' );
const globAll = require( 'glob-all' );

/**
 * Set up file paths
 */
const loc = {
  src:  './{{cookiecutter.package_name}}/',
  dist: './{{cookiecutter.package_name}}/static/tdp/',
  lib:  './node_modules/', // eslint-disable-line no-sync, no-inline-comments, max-len
  test: './{{cookiecutter.package_name}}/tests/'
};

module.exports = {
  pkg:    JSON.parse( fs.readFileSync( 'package.json' ) ), // eslint-disable-line no-sync, no-inline-comments, max-len
  banner:
      '/*!\n' +
      ' *               ad$$               $$\n' +
      ' *              d$"                 $$\n' +
      ' *              $$                  $$\n' +
      ' *   ,adPYba.   $$$$$  $$.,dPYba.   $$.,dPYba.\n' +
      ' *  aP\'    `$:  $$     $$P\'    `$a  $$P\'    `$a\n' +
      ' *  $(          $$     $$(      )$  $$(      )$\n' +
      ' *  "b.    ,$:  $$     $$b.    ,$"  $$b.    ,$"\n' +
      ' *   `"Ybd$"\'   $$     $$`"YbdP"\'   $$`"YbdP"\'\n' +
      ' *                     $$\n' +
      ' *                     $$\n' +
      ' *                     $$\n' +
      ' *\n' +
      ' *  <%= pkg.name %>\n' +
      ' *  <%= pkg.homepage %>\n' +
      ' *  A public domain work of the Consumer Financial Protection Bureau\n' +
      ' */\n',
  lint: {
    js: [
      loc.src + '/js/**/*.js'
    ],
    build: [
      'gulpfile.js',
      'gulp/**/*.js'
    ],
    css: [
      loc.src + '/css/**/*.less',
      loc.src + '/css/**/*.css'
    ]
  },
  test: {
    src:   loc.src + '/js/**/*.js',
    tests: loc.test
  },
  clean: {
    dest: loc.dist
  },
  styles: {
    cwd:      loc.src + '/css',
    src:      '/{{cookiecutter.package_name}}.less',
    dest:     loc.dist + '/css',
    settings: {
      paths: globAll.sync( [
        loc.lib,
        loc.lib + 'cf-*/src'
      ] ),
      compress: true
    }
  },
  scripts: {
    entrypoint: loc.src + '/js/index.js',
    src: [
      loc.src + '/js/**/*.js'
    ],
    dest: loc.dist + '/js/',
    name: 'main.js'
  },
  images: {
    src:  loc.src + '/img/**',
    dest: loc.dist + '/images'
  },
  copy: {
    icons: {
      src:  loc.lib + '/cf-icons/src/fonts/*',
      dest: loc.dist + '/fonts/'
    }
  }
};
