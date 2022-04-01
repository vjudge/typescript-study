module.exports = {
    port: parseInt(process.env.PORT) || 8888,
    consul: {
        opts: {
            host: 'consul.co-engine.com',
            port: 8500,
            // baseUrl: '',
            secure: false,
            promisify: true,
            // defaults: {}
        },
        service: {
            name: 'consul',
            tags: [ 'primary' ],
            protocol: 'http',
            address: process.env.ADDRESS || '127.0.0.1',
            port: parseInt(process.env.PORT) || 8888,
            checks: [{
                http: '/monitor',
                interval: '60s',
                timeout: '10s'
            }]
        }
    }
}