const path = require('path')

module.exports = {
    port: process.env.port || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.dialect || 'sqlite',
            host: process.env.host || 'localhost',
            storage: path.resolve(__dirname, '../../tabtracker.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
