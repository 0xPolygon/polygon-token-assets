var packageInfo = require("../package.json");
const { execSync } = require('child_process');

if (packageInfo) {
    const version = packageInfo.version;
    console.log('version', version);
   // execSync(`cd ../ && npm run build:pack`);
    execSync(`npm un ${packageInfo.name}`);
    execSync(`npm i ../${packageInfo.packageName}-${version}.tgz --no-save`)
}
else {
    throw "no package found";
}
