var opts = module.exports = {
  docTitle:    'pub-pkg-font-open-sans',
  appUrl:      'http://jldec.github.io/pub-pkg-font-open-sans',
  github:      'http://github.com/jldec/pub-pkg-font-open-sans',
  pkgs:        ['pub-theme-doc', 'pub-pkg-font-awesome', 'pub-pkg-highlight', 'pub-pkg-show-font', 'pub-pkg-seo', '..'],
  sources:     ['./index.md', '../README.md'],
  outputs:     { path:'./gh-pages', relPaths:1 },
  injectCss:   '/css/pkg-font-open-sans-doc.css',

  copyright:   'Copyright (c) 2015 Jürgen Leschner - github.com/jldec - MIT License'
}
