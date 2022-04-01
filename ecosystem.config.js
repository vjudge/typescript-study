module.exports = {
  apps: [
    {
      name: 'res-server',
      script: 'dist/src/server.js',
      cwd: './',
      watch: false,
      exec_mode: 'fork',
      instances: 1,
      max_memory_restart: '2048M',
      error_file: '/var/logs/co-engine/res-server-error.log',
      out_file: '/var/logs/co-engine/res-server-out.log',
      merge_logs: true,
      autorestart: true,
      // env: {
      //   NODE_ENV: process.env.NODE_ENV || 'production',
      //   PORT: process.env.PORT || 8100,
      // },
    },
  ],
}
