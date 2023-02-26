const ENV = {
    local: {
        env: 'local',
        apiUrl:''
    },
    staging: {
        env: 'staging',
        apiUrl: ''
    },    
    production: {
        env: 'production',
        apiUrl: ''
    },
}

export const getEnvVars = () => {
    return ENV.local;
}
