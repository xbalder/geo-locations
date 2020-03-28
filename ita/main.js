const fs = require('fs');
const mergeRows = require('./mergeRows');

function readInput() {
    return fs.readFileSync('./input.txt', 'utf-8');
}

function parseInput(input) {
    const rows = input.split('\n')
        .map(row => row.split('\t'))
        .map(row => ({
            country_code: 'ITA',
            postal_code: row[1],
            town: row[2],
            province: row[6],
            latitude: row[9],
            longitude: row[10]
        }));

    const header = ['country_code', 'postal_code', 'town', 'province', 'latitude', 'longitude'];
    const records = [];
    for (let i = 0; i < rows.length; i++) {
        const currentPostalCode = rows[i].postal_code;
        const currentRows = [];
        for(let j = i; j < rows.length && rows[j].postal_code === currentPostalCode; j++) {
            currentRows.push(rows[j]);
        }
        i += currentRows.length - 1;
        const row = mergeRows(currentRows);
        records.push([row.country_code, row.postal_code, row.town, row.province, row.latitude, row.longitude]);
    }

    return [header, ...records]
        .map(row => row.join(','))
        .join('\n');
}

function writeOutput(output) {
    fs.writeFileSync('./output.csv', output);
}

function main() {
    const input = readInput();
    const output = parseInput(input);
    writeOutput(output);
}
main();