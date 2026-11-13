const fs = require('fs');
const path = require('path');

const joke = "My AI agent's PR review just flagged the only bottleneck in our repo: my own human judgment.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, "entry.txt"), joke, 'utf8');
