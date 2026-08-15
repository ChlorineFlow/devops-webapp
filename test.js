const fs = require("fs");

if (!fs.existsSync("dist/index.html")) {
    console.error("Build test failed.");
    process.exit(1);
}

console.log("Build test passed.");