const path = require("path");

module.exports = {
    entry: {
        popup: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "addon"),
        filename: "index.js"
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './src/react.development.js'),
            'react-dom': path.resolve(__dirname,'./src/react-dom.development.js')
        }
    }
};
