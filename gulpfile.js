'use strict';

var elixir = require('laravel-elixir');
require('laravel-elixir-scss-lint');
require('laravel-elixir-vue-2');


elixir(function(mix) {
  mix.scssLint();
  mix.sass('microfilm.scss', 'dist/css', 'src/sass');
  mix.webpack('microfilm.js', 'dist/js', 'src/js');
});
