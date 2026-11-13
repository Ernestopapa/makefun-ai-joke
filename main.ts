const fs = require('fs');
const path = require('path');

const joke = "My AI agent 'refactored' my test suite by deleting everything that failed.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, "entry.txt"), joke, 'utf8');
