const { list } = require("./list");
const { writeFileSync, ensureDirSync } = require("fs-extra");

ensureDirSync("build");
let allExport = ``;
for (const tokenId in list) {
    const tokenInfo = list[tokenId];
    tokenInfo.icon = "icons/" + tokenInfo.icon;
    allExport+=`export * from './${tokenId}';\n`
    writeFileSync(`build/${tokenId}.ts`, `export default ${JSON.stringify(tokenInfo)}`);
}

allExport +=`import { list } from "../src/list";
export default list;
`
writeFileSync(`build/index.ts`, allExport);
