let processEnv = process.env;
const pm2ConfigFile = "./bin/pm2.dev.config";
if (!processEnv.IS_PRODUCTION) {
    processEnv = require(pm2ConfigFile).apps[0].env;
}
/**
 * 反向代理配置
 */
const apiOptions = {
    target: processEnv.serviceBaseUrl, // 目标主机
    changeOrigin: true,               // 需要虚拟主机站点
    pathRewrite: {
        '^/api': '/'
    }
};

/**
 * 全局配置对象
 * @type {{ proxyOptions:{}}}
 */
const appConfig = {
    IP: processEnv.IP,
    PORT: processEnv.PORT,
    proxyOptions: {
        apiOptions: apiOptions
    }
};

module.exports = appConfig;