'use strict';

const path = require('path');
const fs = require('fs');

class fileDataManager {

    byExtension (fileName, options) {
        const loadFile = {
            '.json': this.loadJsonFile,
            '.csv': this.loadCsvFile,
            '.yml': this.loadYmlFile,
            '.xlsx': this.loadXlsxFile,
            '.properties': this.loadPropertiesFile
        };
        let ext = path.extname(fileName);
        return loadFile[ext](fileName, options);
    };

    loadPropertiesFile (fileName) {
        return new Promise((resolve, reject) =>{
            require('properties').parse(path.resolve(fileName), { path: true }, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    loadCsvFile (fileName) {
        return new Promise((resolve, reject) =>{
            require('node-csv').createParser().mapFile(path.resolve(fileName), function (err, data) {
                if (err) reject(err);
                resolve(data[0]);
            });
        });
    }

    loadJsonFile (fileName) {
        return require(path.resolve(fileName));
    }

    loadYmlFile (fileName) {
        return require('js-yaml').safeLoad(fs.readFileSync(path.resolve(fileName), 'utf8'));
    }

    loadXlsxFile (fileName, options) {
        return require('xlsx').readFile(path.resolve(fileName)).Sheets[options.sheetName];
    }
}

module.exports = new fileDataManager();