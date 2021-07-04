export const getImage = (icon) => {
    try {
        // return require("assert")
        return require(`file-loader?name=assets/[name].[ext]!@maticnetwork/token-assets/${icon}`) as any
    } catch (error) {
        console.error(error);
        return {
            default: ""
        }
    }
}
