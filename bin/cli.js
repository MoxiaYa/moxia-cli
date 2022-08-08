#!/usr/bin/env node
const CLI = require('../src/cli')
const { program } = require('commander');
const cli = new CLI();
program.version('0.0.1');
program
    .command('dev')
    .description('本地开发')
    .action(cli.run.bind(cli, 'dev'));
program.parse(process.argv);
