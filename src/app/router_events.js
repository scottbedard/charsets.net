export const beforeEach = function(route, redirect, next) {
    next();
};

export const afterEach = function (route) {
    // send the pageview to google analytics
    ga('set', 'page', route.path);
    ga('send', 'pageview');
};
