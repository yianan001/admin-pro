import path from 'path'
const CracoLessPlugin = require('craco-less')

module.exports = {
  style: {
    postcss: {
      loaderOptions: {
        postcssOptions: {
          plugins: [
            require('autoprefixer')
          ]
        }

      }
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]

}