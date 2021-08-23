const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

app.post('/api/contact', (req, res) => {
  sendMail(req, res)
})

const mailConfig = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
  secure: true,
  logger: true,
  debug: true,
  secureConnection: false,
  tls: {
    rejectUnAuthorized: true,
  },
}
const transporter = nodemailer.createTransport(mailConfig)

const sendMail = (req, res) => {
  console.log(transporter.options.host)
  transporter.verify((err, success) => {
    if (err) console.error('ERR VERIFY', err)
    console.log('Your config is correct')
  })

  transporter.sendMail(
    {
      from: `${req.body.full_name}<${req.body.email}>`,
      to: process.env.GYBO_CONTACT,
      subject: 'Nouveau message de Gybo.ch',
      html: formatTemplate(req.body),
    },
    function (err, info) {
      console.log('info ?', info)
      if (err) {
        return res.status(500).send(err)
      }
      res.json({ success: true })
    }
  )
}

const formatTemplate = (body) => {
  return `
  <h4 style="margin-bottom:15px;">Salut Broka, après ton nouvel album je rap pour la Lune, beaucoup de gens cherchent à rentrer en contact avec toi via gybo.ch, ta plateforme de streaming,
  voilà le message de l'un d'eux:</h4>
    <h5>Nom complet: </h5>
    <p>${body.full_name}</p>
    <h5>Email: </h5>
    <p>${body.email}</p>
    <h5>Site web: </h5>
    <p>${body.website || '-'}</p>
  <h5>Message: </h5>
  <p>${body.message}</p>

  <h6 style="margin-top:25px;">Peace,<em>Stillstar, le rappeur qui rap pour le Soleil</em></h6>
  `
}

module.exports = app
