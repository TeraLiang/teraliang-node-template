const fs = require('fs');
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();
const config = require('./config');

// view engine setup
app.set('views', path.join(__dirname, 'dist'));

app.use(express.static(path.resolve(__dirname, './dist')))


app.use('/api', proxy(config.proxyOptions.apiOptions));//对地址为’/api‘的请求全部转发

app.get('*', function (req, res) {
    //同步读取文件
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})

//中间件没有处理好就会到这里
app.use(function (req, res, next) {
    // myLog.trace("最后的中间件，到这里说明404，如果和期望的不一样那肯定是哪里肯定有问题");
    res.send({code: "ERR-112", msg: "非法操作"});
});

module.exports = app;
