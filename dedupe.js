const fs = require('fs');

// Path to your terminology.ts file
const filePath = './src/services/terminology.ts';

// Read the file as text
let content = fs.readFileSync(filePath, 'utf8');

// Extract the object literal (between the first and last curly brace)
const start = content.indexOf('{');
const end = content.lastIndexOf('}');
const objectBody = content.slice(start + 1, end);

// Split into lines
const lines = objectBody.split('\n');

const seen = new Set();
const result = [];

let currentKey = null;
let buffer = [];
let inBlock = false;

for (let line of lines) {
  const keyMatch = line.match(/^(\s*)([A-Za-z0-9_]+):\s*{$/);
  if (keyMatch) {
    currentKey = keyMatch[2];
    if (!seen.has(currentKey)) {
      seen.add(currentKey);
      inBlock = true;
      buffer = [line];
    } else {
      inBlock = false;
    }
    continue;
  }

  if (inBlock) {
    buffer.push(line);
    if (line.trim() === '},') {
      result.push(buffer.join('\n'));
      inBlock = false;
      buffer = [];
      currentKey = null;
    }
  }
}

// Compose the cleaned file content
const cleaned =
  content.slice(0, start + 1) +
  '\n' +
  result.join('\n') +
  '\n' +
  content.slice(end);

fs.writeFileSync('./src/services/terminology.deduped.ts', cleaned, 'utf8');
console.log('Deduplicated file written to ./src/services/terminology.deduped.ts');