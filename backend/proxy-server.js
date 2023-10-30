const express = require("express");
const http = require("http");
const https = require("https");
const app = express();

app.use((req, res) => {
  // Define the target API URL here
  const targetUrl = "https://api.openweathermap.org";

  // Proxy the request to the target API
  const target = targetUrl + req.url;
  const targetProtocol = target.startsWith("https:") ? https : http;

  const proxyReq = targetProtocol.request(target, (proxyRes) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Set appropriate CORS headers
    proxyRes.pipe(res, {
      end: true,
    });
  });

  req.pipe(proxyReq, {
    end: true,
  });
});

const port = 3001; // Choose a port for your proxy server

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
