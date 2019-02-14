const path = require("path");
const webpack = require("webpack");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 5454,
        hot: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.join(__dirname, 'src/'),
                'js': path.join(__dirname, 'src/js')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                mapGetters: ["vuex", "mapGetters"],
                mapActions: ["vuex", "mapActions"],
                mapMutations: ["vuex", "mapMutations"],
                mapState: ["vuex", "mapState"]
            })
        ]
    }
}
