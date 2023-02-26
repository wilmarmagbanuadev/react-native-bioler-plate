const ENV = {
    local: {
        env: 'local',
        apiUrl:'aaa'
    },
    staging: {
        env: 'development',
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
