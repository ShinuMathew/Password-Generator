const fs = require('fs'),
    path = require('path'),
    os = require('os'),
    chalk = require('chalk');

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 777, (e, id) => { 
        fs.write(id, password + os.EOL, null,'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to Password.txt'))
            })
        })
    })
}

module.exports = savePassword