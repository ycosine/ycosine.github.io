module.exports = {
  apps: [
    {
      name: 'cosine_blog',
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
}
