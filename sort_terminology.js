const fs = require('fs');
const path = './src/services/terminology.deduped.ts';

// Read the file
const content = fs.readFileSync(path, 'utf8');

// Extract object body between the first `{` after `=` and the last `}`
const objStart = content.indexOf('{', content.indexOf('='));
const objEnd = content.lastIndexOf('}');
const before = content.slice(0, objStart + 1);
const objBody = content.slice(objStart + 1, objEnd);
const after = content.slice(objEnd);

// Match each key/value block (assumes each key-value pair ends with a `},`)
const keyValueRegex = /(\s*[A-Za-z0-9_]+:\s*{[^}]*},?)/gs;
const entries = [];
let match;
while ((match = keyValueRegex.exec(objBody))) {
  entries.push(match[1]);
}

// Sort alphabetically by key
entries.sort((a, b) => {
  const keyA = a.match(/^\s*([A-Za-z0-9_]+)/)[1].toLowerCase();
  const keyB = b.match(/^\s*([A-Za-z0-9_]+)/)[1].toLowerCase();
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});

// Combine into new file content
const newContent = before + '\n' + entries.join('\n') + '\n' + after;

// Write to a new file (to be safe)
fs.writeFileSync('./src/services/terminology.sorted.ts', newContent, 'utf8');
console.log('Alphabetically sorted object written to ./src/services/terminology.sorted.ts');