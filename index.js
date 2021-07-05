#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const clipboardy = require('clipboardy');
const log = console.log;
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

// program.option("-l, --length <number>", "length of Password").parse()   // node index -h    
/* => 
 -V, --version          output the version number
  -l, --length <number>  length of Password
  -h, --help             display help for command
*/

// console.log(program.opts()) // node index --length=10  =>  { length: '10' }

program.version('1.0.0').description('Simple Password Generator');

program
    .option("-l, --length <number>", "length of Password", '8')
    .option("-s, --save", "saves password to passswords.txt")
    .option("-nn, --no-numbers", "remove numbers")
    .option("-ns, --no-symols", "removes symbols")
    .parse()

const { length, save, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length || 10, numbers || true, symbols || true)

// Save to file
if(save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output generated password
log(chalk.blue('Generated password : ')+ generatedPassword)
log(chalk.yellow('Password copied to clipboard'))