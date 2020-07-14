'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('              Axel Navarro'),
  handle: chalk.white('navarroaxel'),
  work: chalk.white('Software Engineer'),
  opensource: chalk.white('Weekend Warrior'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('navarroaxel'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~navarroaxel'),
  github: chalk.gray('https://github.com/') + chalk.green('navarroaxel'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('navarroaxel'),
  dev: chalk.gray('https://dev.to/') + chalk.cyan('navarroaxel'),
  kde: chalk.gray('https://navarroaxel.github.io/kde'),
  npx: `${chalk.red('npx')} ${chalk.white('navarroaxel')}`,
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelDev: chalk.white.bold('        DEV:'),
  labelKde: chalk.white.bold('        KDE:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const deving = `${data.labelDev}  ${data.dev}`
const kdeing = `${data.labelKde}  ${data.kde}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               deving + newline + // data.labelDev + data.dev
               kdeing + newline + // data.labelKde + data.kde
               npming + newline + newline + // data.labelNpm + data.npm
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.blue(boxen(output, options)))
