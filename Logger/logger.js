/*
 *  WaveLine Codebase: Logger Module v1.0.0
 *  https://github.com/waveline-software/codebase/Logger
 *  Copyright 2019, WaveLine Software, All Rights Reserved.
 */

// Import modules.
const chalk = require('chalk')

// Export assignments.
module.exports = {
    
    // Module version.
    version: '1.0.0',
    
    // General use, outputs a message with a tag, formatting extra newlines if needed.
    custom: function(tag, message) {
        console.log(`${String(tag)}\t ${chalk.grey('|')} ${String(message)}`.replace(new RegExp('\n', 'g'), `\n\t ${chalk.grey('|')} `))
    },
    
    // Information, used for updating statuses, etc.
    info: function(message) { this.custom(chalk.blueBright('INFO'), message) },
    
    // Data, used for outputting results.
    data: function(message) { this.custom(chalk.whiteBright('DATA'), message) },
    
    // Warning, used for warnings that can cause errors.
    warn: function(message) { this.custom(chalk.yellowBright('WARN'), message) },
    
    // Error, used for non-fatal errors.
    error: function(message) { this.custom(chalk.redBright('ERROR'), message) },
    
    // Fatal, used for fatal errors that may not be able to be recovered from.
    fatal: function(message) { this.custom(chalk.bold.redBright('FATAL'), message) }

}