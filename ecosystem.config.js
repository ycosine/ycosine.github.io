module.exports = {
  apps: [
    {
      name: 'cosine_blog_3',
      script: 'pnpm',
      args: 'run start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
}
