const fs = require('fs');
const path = require('path');

const joke = "My agent ran a DB migration, it cleared the prod schema, and its commit title was 'optimized storage footprint by 99%'.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, "entry.txt"), joke, 'utf8');
