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
  secureConnection: true,
  tls: {
    rejectUnauthorized: false,
  },
}
const transporter = nodemailer.createTransport(mailConfig)

const sendMail = (req, res) => {
  transporter.sendMail(
    {
      from: `${req.body.full_name}<${req.body.email}>`,
      to: process.env.GYBO_CONTACT,
      subject: req.body.subject || 'Nouveau message de Gybo.ch',
      html: formatTemplate(req.body),
    },
    function (err, info) {
      if (err) {
        return res.status(500).send(err)
      }
      res.json({ success: true })
    }
  )
}

const formatTemplate = (body) => {
  return `
  <h3>New message from gybo.ch !</h3>
  <div style="display:flex;align-items:center">
    <h4>Sender full name: </h4>
    <p style="margin-left:1rem;">${body.full_name}</p>
  </div>
  <div style="display:flex;align-items:center">
    <h4>Sender email: </h4>
    <p style="margin-left:1rem;">${body.email}</p>
  </div>
  <h4 style="margin-bottom:0">Sender message: </h4>
  <p style="margin-top:10px">${body.message}</p>
  `
}

module.exports = app
