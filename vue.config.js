module.exports = {
    devServer: {
        // host: 'localhost',
        // port: 8080,
        // https: false,
        // open: true,
        proxy: {
            '/production': {
                target: 'http://localhost:8080',
                ws: false,
                changeOrigin: true
            },
            '/dev': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    }
}