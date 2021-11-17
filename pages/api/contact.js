import sendEmail from './../../lib/mail';
const express = require('express')
const cors = require('cors')
const app = express()

app.get('/with-cors', cors(), (req, res, next) => {
    res.json({ msg: 'WHOAH with CORS it works!  ' })
})



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
    console.log(message);
    res.send(`Спасибо за заявку, ${req.body.name}!`);
}