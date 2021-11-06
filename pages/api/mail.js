const mail = require('@sendgrid/mail')
export default function (req, res) {
    const body = JSON.parse(req.body)

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;

    const data = {
        to: 'elizabet.liber@gmail.com',
        from: 'lieselliber@gmail.com',
        subject: "New web form message",
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    };
    mail.send(data)
    console.log(body)
    res.status(200).json({ status: "Ok" })
}