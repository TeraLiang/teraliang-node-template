const IP = 'localhost';
const SERVICE_IP = '192.168.12.164';
const SERVICE_PORT = 8768;
const IS_PRODUCTION = true; // 用于识别非本地开发
module.exports = {
    apps: [
        {
            name: 'dev',
            script: './www',
            watch: true,
            env: {
                IS_PRODUCTION: IS_PRODUCTION,
                IP: `http://${IP}`,
                PORT: 8000,
                serviceBaseUrl: `http://${SERVICE_IP}:${SERVICE_PORT}`
            }
        }
    ]
};
