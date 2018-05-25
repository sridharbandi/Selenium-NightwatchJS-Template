const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
    src_folders: ["tests"],
    page_objects_path: 'pageobjects',
    output_folder: 'reports',
    custom_assertions_path: '',
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }, selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                marionette: true
            },
            selenium: {
                cli_args: {
                    'webdriver.gecko.driver': geckodriver.path
                }
            }
        }
    }
};