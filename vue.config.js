const webpack = require("webpack");
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'windows.jQuery': 'jquery'
            })
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8899',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
