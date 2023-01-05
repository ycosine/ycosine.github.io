module.exports = {
  apps: [
    {
      name: 'cosine_blog',
      script: 'pnpm',
      args: 'start',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
}
