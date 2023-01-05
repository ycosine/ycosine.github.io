module.exports = {
  apps: [
    {
      name: 'cosine_blog_2',
      script: 'pnpm',
      args: 'start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
}
