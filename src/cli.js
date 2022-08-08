const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const baseConfig = require('../src/webpackConfig/base')
const info = (...args) => {
    console.log(chalk.greenBright(...args))
}
class CLI {
    constructor() { }
    async run(type) {
        await this[type]()
    }

    async dev() {
        info('MOXIA RUN DEV')
        const compiler = webpack(baseConfig)
        const server = new WebpackDevServer({ open: true }, compiler)
        await server.start()
    }
}

module.exports = CLI