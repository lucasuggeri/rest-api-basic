const config = {
    environment: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    db_url: process.env.DATABASE_URL || 'localhost',
    db_port: process.env.DATABASE_PORT || 27017,
    db_username: process.env.DATABASE_USERNAME || 'juninhoFreitas',
    db_password: process.env.DATABASE_PASSWORD || 'iLoveNodeJs',
    db_database: process.env.DATABASE_DATABASE || 'rest-api-basic',
}

export default config;