//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: ['integration-testing.js'],

    capabilities: {
        'browserName': 'chrome'
    },

    directConnect:true,

    baseUrl: 'http://localhost:9000/',

    framework: 'jasmine',

    resultJsonOutputFile:'e2e-test-result.json',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        isVerbose: true
    }

};