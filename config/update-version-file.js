const replace = require('replace-in-file');
const oldVersion = require('../package.json').oldVersion;
const version = require('../package.json').version;


const options = {
  files: 'src/version.ts',
  from: oldVersion ? oldVersion : '##VersionReplace##',
  to: version,
};

try {
    const results = replace.sync(options)
    console.log('Replacement results:', results);
} catch (error) {
    console.error('Error occurred:', error);
}