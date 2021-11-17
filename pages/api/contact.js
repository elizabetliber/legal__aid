import sendEmail from './../../lib/mail';

export default async function handler(req, res) {
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
    sendEmail(message);
    console.log(`BEFORE RESPONSE ${JSON.stringify(res)}`);
    res.send(`Спасибо за заявку, ${req.body.name}!`);
}