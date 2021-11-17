import sendEmail from './../../lib/mail';
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());



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