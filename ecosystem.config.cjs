module.exports = {
  apps: [
    {
      name: "hgptot",
      cwd: "/www/wwwroot/hgptot.com",
      script: "node",
      args: ".next/standalone/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3004,
        HOSTNAME: "127.0.0.1"
      },
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      watch: false
    }
  ]
};
