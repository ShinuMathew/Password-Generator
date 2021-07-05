const program = require('commander');

program.version('1.0.0').description('Simple Password Generator');
// program.option("-l, --length <number>", "length of Password").parse()   // node index -h    
/* => 
 -V, --version          output the version number
  -l, --length <number>  length of Password
  -h, --help             display help for command
*/

program
    .option("-l, --length <number>", "length of Password", '8')
    .option("-s, --save", "saves password to passswords.txt")
    .option("-nn, --no-numbers", "remove numbers")
    .option("-ns, --no-symols", "removes symbols")
    .parse()

const { length, save, numbers, symbols } = program.opts()

console.log(program.opts()) // node index --length=10  =>  { length: '10' }
