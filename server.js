import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'

const app = express()
const compiler = webpack(webpackConfig)
const filepath = path.join(compiler.outputPath, 'index.html')
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  silent: true,
  publicPath: '/',
  stats: 'errors-only',
})

app.use(webpackHotMiddleware(compiler))
app.use(middleware)
app.get('*', (req, res) => {
  middleware.fileSystem.readFile(filepath, (e, file) => e
      ? res.sendStatus(404)
      : res.send(file.toString())
    )
})

app.listen(3000, e => e
  ? console.log(e)
  : console.log(`We started and we've stared in ${process.env.NODE_ENV}`)
)