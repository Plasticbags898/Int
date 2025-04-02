const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const target = 'https://www.google.com'; // Change this to any site

app.use('/', createProxyMiddleware({ target, changeOrigin: true }));

app.listen(3000, () => {
    console.log('Proxy is running on port 3000');
});
