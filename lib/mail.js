import mailer from 'nodemailer';

const sendEmail = (message) => {
    const smtpTransport = mailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'liesellib@yandex.ru',
        pass: '08032002LLL'
    },
    tls: {rejectUnauthorized: false},
}, {
    from: 'krylevsky-test <liesellib@yandex.ru>'
});
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;