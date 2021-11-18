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
        from: 'legal-aid <liesellib@yandex.ru>'
    });
    const message = {
        to: 'liesellib@yandex.ru',
        subject: `Письмо с сайта legal-aid от ${req.body.name}`,
        text: `Сообщение от клиента`,
        html: `
			<p><b>Имя:</b> ${req.body.name}</p> 
        	<p><b>Телефон:</b> ${req.body.phone}</p>
        	<p><b>E-mail:</b> ${req.body.email}</p>
        	<p><b>Сообщение:</b> ${req.body.message}</p>
        `,
    };
    await new Promise((resolve, reject) => {
        try {
            smtpTransport.sendMail(message, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent successfully", info);
                }
                smtpTransport.close();
            });
            alert("Форма отправлена")
        } catch (e){
            alert(e.error)
        }

    });
    res.send(`Спасибо за заявку, ${req.body.name}!`);
}

