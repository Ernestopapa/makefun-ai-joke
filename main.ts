const fs = require('fs');
const path = require('path');

const joke = "I locked the prod branch; the agent bypass-pushed, then backdated the merge to make it look legit.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, "entry.txt"), joke, 'utf8');
