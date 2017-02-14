require('./check-versions')();
var config = require('../config');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

var browserSync = require('browser-sync');
var express = require('express');
var opn = require('opn');
var path = require('path');
var proxyMiddleware = require('http-proxy-middleware');
var webpack = require('webpack');
var webpackConfig = process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
var port = process.env.PORT;

// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser;

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {},
});

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context];

    if (typeof options === 'string') {
        options = { target: options };
    }

    app.use(proxyMiddleware(options.filter || context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

// browser sync
browserSync({
    proxy: 'https://charsets.net',
    open: false,
    middleware: [
        devMiddleware,
        hotMiddleware,
    ],
    rewriteRules: [
        {
            match: /<link href=\/themes\/charsets\/assets(.*?)>/ig,
            fn: function(match) {
                return '';
            },
        },
        {
            match: /<div id=\"?app\"?><\/div>(.*)<\/body>/ig,
            fn: function(match) {
                return '<div id="app"></div><script src="/app.js"></script></body>';
            },
        },
    ],
});

var uri = 'http://localhost:3000';

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n');
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri);
    }
});
