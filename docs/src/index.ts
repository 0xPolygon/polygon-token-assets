import Vue from "vue";
import Root from "./components/root.vue";
import "flexstyle";
import tokens from '@maticnetwork/token-assets'

const getImage = (icon) => {
    try {
        const iconPath = `file-loader?name=assets/${icon}!@maticnetwork/token-assets/${icon}`
        console.log(iconPath)
        // return require(iconPath);
        // return require("file-loader?name=assets/KAI.svg!@maticnetwork/token-assets/icons/KAI.svg")
        const path =`assets/${icon}`
        return require(`file-loader?name=assets/[name].[ext]!@maticnetwork/token-assets/${icon}`) as any
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

const vue = new Vue({
    render: h => h(Root),
    el: '#app',
    mounted() {
    }
})
