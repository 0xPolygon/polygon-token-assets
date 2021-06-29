import * as $ from 'jquery';
import tokens from '@maticnetwork/token-assets'

const getiImage = (icon) => {
    try {
        const iconPath = `file-loader?name=assets/${icon}!@maticnetwork/token-assets/icons/${icon}`
        console.log(iconPath)
        // return require(iconPath);
        // return require("file-loader?name=assets/KAI.svg!@maticnetwork/token-assets/icons/KAI.svg")
        return require(`file-loader?name=assets/KAI.svg!@maticnetwork/token-assets/icons/${icon}`)
    } catch (error) {
        console.error(error);
        return {
            default: ""
        }
    }

}
for (var tokenId in tokens) {
    tokens[tokenId].image = getiImage(tokens[tokenId].icon).default
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
