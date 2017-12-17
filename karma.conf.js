//jshint strict: false

module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            'app/assets/lib/angular/angular.js',
            'app/assets/lib/angular-ui-router/release/angular-ui-router.min.js',
            'app/assets/lib/angular-mocks/angular-mocks.js',
            'app/assets/lib/angular-bootstrap/ui-bootstrap.min.js',
            'app/assets/lib/angular-chart.js/dist/angular-chart.min.js',
            'app/app.js',
            'app/config.js',
            'app/components/**/*.*.js',
            'app/components/**/*.js',
            'app/shared/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputDir:'test-results/unit',
            outputFile: 'unit.xml',
            suite: 'unit'
        },

        reporters: ['progress', 'junit']

    });
};