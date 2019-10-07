/*
 *  WaveLine Codebase: Logger Module v1.0.0 (Test Script)
 *  https://github.com/waveline-software/codebase/Logger
 *  Copyright 2019, WaveLine Software, All Rights Reserved.
 */

// Import logger library locally.
const logger = require('./logger')

// Print example messages.
logger.info('NodeJS says: "Hello, World!"')
logger.data('Calculation results: 1 + 1 = 2')
logger.warn('Something bad is about to happen!')
logger.error('Something bad happened.')
logger.fatal('Uh oh, big problem.')