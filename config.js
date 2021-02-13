const path = require('path')
const fs = require('fs')

const env = process.env.NODE_ENV

const envPath = path.resolve(process.cwd(), `.env.${env}`)
const defaultEnvPath = path.resolve(process.cwd(), '.env')

console.log(
  'NODE_ENV: ' + env,
  'envPath: ' + envPath,
  'defaultEnvPath: ' + defaultEnvPath
)

require('dotenv').config({
  path: fs.existsSync(envPath) ? envPath : defaultEnvPath,
})
