const path = require("path");
const glob = require("glob");
const fs = require("fs");

const sourceFolder = "D:\\Git\\My-Notes\\03 Resources\\Medicine";
const sourceFiles = glob.sync(sourceFolder + "/**/*.md");

sourceFiles.forEach((file) => {
  let sourceName = path.basename(file);
  let dest = path.join(__dirname, "notes", sourceName);
  //   console.log(file, dest);
  fs.copyFileSync(file, dest);
});
