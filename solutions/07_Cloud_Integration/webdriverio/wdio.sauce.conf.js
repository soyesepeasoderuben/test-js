const { config: localConfig } = require('../../02_Setup/webdriverio/wdio.conf')
const path = require('path');

const sauceConfig = {
    'sauce:config': {
        build: `TestJS build-${(Date.now() / 1000).toFixed()}`,
        appiumVersion: '1.19.2'
    }
}


exports.config = {
    /**
     * merge previous config
     */
    ...localConfig,
    logLevel: 'error',
    reporters: ['spec'],
    specs: ['./test/specs/**/*.js'],
    /**
     * set Sauce credentials
     */
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    /**
     * add @wdio/saucelabs-service
     */
    services: ['sauce'],
    /**
     * set more capabilities
     */
    capabilities: [
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        ...sauceConfig
    },
    {
        browserName: 'chrome',
        browserVersion: 'latest-1',
        platformName: 'Windows 10',
        ...sauceConfig
    }, 
    {
        browserName: 'safari',
        browserVersion: 'latest',
        platformName: 'MacOS 10.15',
        ...sauceConfig
    },
    {
        browserName: 'safari',
        browserVersion: 'latest-1',
        platformName: 'MacOS 10.15',
        ...sauceConfig
    },
    //Test on iOS Mobile Web Emusim
    {
        browserName: 'Safari',
        platformVersion: '14.0',
        platformName: 'iOS',
        deviceName: 'iPhone XS Simulator',
        ...sauceConfig
    },
    {
        browserName: 'Safari',
        platformVersion: '14.0',
        platformName: 'iOS',
        deviceName: 'iPhone X Simulator',
        ...sauceConfig
    },
    /**
     * iOS Real Devices
     */
    {
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone XS',
        ...sauceConfig
    },
    {
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone X',
        ...sauceConfig
    },
    {
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone 11 Pro Max',
        ...sauceConfig
    },
    {
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone 12',
        ...sauceConfig
    },
    /**
     * Android Testing
     */
    //Test on Android Real Devices
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Samsung Galaxy S10',
        ...sauceConfig
    },
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 5',
        ...sauceConfig
    },
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 4a',
        ...sauceConfig
    },
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 4 XL',
        ...sauceConfig
    },
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 4',
        ...sauceConfig
    },
    //Test on Android Web
    {
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '11.0',
        deviceName: 'Google Pixel 3 XL GoogleAPI Emulator',
        ...sauceConfig
      }]
}
