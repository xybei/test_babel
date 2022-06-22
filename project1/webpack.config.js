const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/lib1.js',
    output: {
        path: __dirname,
        filename: `lib1.out.js`,
        library: 'Lib1',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                // exclude: {
                //     and: [/node_modules/],  // Exclude libraries in node_modules ...
                //     not: [/sharedlib/]      // Except for a few of them that needs to be transpiled because they use modern syntax
                // },
                // include: [
                //     path.resolve(__dirname, 'src'),
                //     path.resolve(__dirname, 'node_modules/sharedlib')
                // ],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};