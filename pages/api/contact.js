import sendEmail from './../../lib/mail';
const express = require('express')
const cors = require('cors')
const app = express()

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin",'https://legal-aid-liard.vercel.app/');
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.setHeader("Access-Control-Expose-Headers", "Set-Cookie");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-xsrf-token, X-Requested-With, Accept, Expires, Last-Modified, Cache-Control");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
    next();
});


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