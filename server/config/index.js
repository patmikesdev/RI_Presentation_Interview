let config = {
    port: process.env.PORT || 8080, 
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: process.env.DB_PORT || "27017" 
}

switch(process.env){
    case 'testing':
        config.db = 'movieDB_Test';
        config.port = 8081; 
        break; 
    case 'development':
        config.db = 'movieDB_Dev';
        break;
    case 'production':
        config.db = 'movieDB_Production';
        break;
    default: 
        config.db = 'movieDB_Dev';
    }
    config.dbURL = `mongodb://${config.dbHost}:${config.dbPort}/${config.db}`;
    
export default config; 