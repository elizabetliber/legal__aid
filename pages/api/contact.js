import mailer from 'nodemailer';
export default async function sendEmail(req, res) {
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
    const message = {
        to: 'liesellib@yandex.ru',
        subject: `Письмо с сайта krylevsky-test от ${req.body.name}`,
        text: `
			Имя: ${req.body.name}, 
        	Телефон: ${req.body.phone},
        	E-mail: ${req.body.email},
        	Сообщение: ${req.body.message},
        `,
    };
    await new Promise((resolve, reject) => {
        smtpTransport.sendMail(message, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent successfully", info);
            }
            smtpTransport.close();
        });
    });

    console.log(`BEFORE RESPONSE ${JSON.stringify(res)}`);
    res.send(`Спасибо за заявку, ${req.body.name}!`);
}

