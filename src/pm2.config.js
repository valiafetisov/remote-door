// https://pm2.io/doc/en/runtime/reference/ecosystem-file/
// pm2 reload pm2.config.js --env production
module.exports = {
  apps: [{
    name: 'doors',
    script: '/opt/remote-doors/src/server/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    max_memory_restart: '1G'
  }]
}
