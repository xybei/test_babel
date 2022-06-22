module.exports = {
    presets: [
        ["@babel/preset-env",
            {
                targets: {
                    ie: 10
                },
                debug: true
            }]
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime", {
                corejs: 3
            }
        ]
    ]
};
