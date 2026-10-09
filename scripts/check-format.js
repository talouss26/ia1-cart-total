import { readFileSync } from 'node:fs';

const files = [
    'src/cart.js',
    'test/cart.test.js',
    'test/cart-rules.test.js'
  ];
let failed = false;

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const lines = text.split('\n');

  lines.forEach((line, index) => {
    if (/[ \t]+$/.test(line) || line.includes('\t')) {
      console.error(`${file}:${index + 1}: remove tabs or trailing spaces`);
      failed = true;
    }
  });

  if (!text.endsWith('\n')) {
    console.error(`${file}: add a newline at the end`);
    failed = true;
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log('Format checks passed');
}