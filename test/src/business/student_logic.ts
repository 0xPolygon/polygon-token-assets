import * as $ from 'jquery';
import tokens from '@maticnetwork/token-assets'

const getImage = (icon) => {
    try {
        const iconPath = `file-loader?name=assets/${icon}!@maticnetwork/token-assets/${icon}`
        console.log(iconPath)
        // return require(iconPath);
        // return require("file-loader?name=assets/KAI.svg!@maticnetwork/token-assets/icons/KAI.svg")
        const path =`assets/${icon}`
        return require(`file-loader?name=assets/[name].[ext]!@maticnetwork/token-assets/icons/${icon}`) as any
    } catch (error) {
        console.error(error);
        return {
            default: ""
        }
    }

}
for (var tokenId in tokens) {
    tokens[tokenId].image = getImage(tokens[tokenId].icon).default
}
//initiate jsstore at the start of app

export class StudentLogic {

    async load() {
        try {
            const tableBody = document.querySelector('#tblStudents tbody');
            let html = ''
            for (const key in tokens) {
                html += this.getHtmlRow(tokens[key]);
            }
            tableBody.innerHTML = html;
        }
        catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    private getHtmlRow(token) {
        return `<tr>
            <td>${token.symbol}</td>
            <td>${token.icon}</td>
            <td>
            <img src="${token.image}"/>
            </td>
            </tr>`;
    }

}
