const { join, basename } = require("path");
const glob = require("glob");
const fs = require("fs");

const sourceFolder = "D:\\Git\\My-Notes\\03 Resources\\Medicine";
const sourceFiles = glob.sync(sourceFolder + "/**/*.md");

sourceFiles.forEach((file) => {
  let sourceName = basename(file);
  let dest = join(__dirname, "notes", sourceName);
  console.log(`Copying ${file} to ${dest}`);
  fs.copyFileSync(file, dest);
});
