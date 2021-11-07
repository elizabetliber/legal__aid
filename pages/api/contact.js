
export default async function (req, res) {
    require('dotenv').config()
    res.end(JSON.stringify(response))
    let nodemailer = require('nodemailer')
    let testAccount = nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.ethereal.email",
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass,
        },
        secure: true,
    })
    const mailData = {
        from: 'elizabet.liber@gmail.com',
        to: 'lieselliber@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}
