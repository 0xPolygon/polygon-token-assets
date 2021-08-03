const { list } = require("./list");
const { writeFileSync, ensureDirSync } = require("fs-extra");

ensureDirSync("build");
let allExport = ``;
for (const tokenId in list) {
    const tokenInfo = list[tokenId];
    tokenInfo.icon = "icons/" + tokenInfo.icon;
    allExport += `export * from './${tokenId}';\n`
    writeFileSync(`build/${tokenId}.ts`, `export const ${tokenId} = ${JSON.stringify(tokenInfo)}`);
}

writeFileSync(`build/all.ts`, "export const list = " + JSON.stringify(list));

allExport += `import { list } from "./all";
export default list;
`
writeFileSync(`build/index.ts`, allExport);
