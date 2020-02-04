const nodemailer = require('nodemailer')
require('dotenv').config()

const sender = async () => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user
            pass: process.env.MAIL_PASS // generated ethereal password
        }
    })
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <ahmadhaqqi690@gmail.com>', // sender address
        to: "ilhamserbaguna@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    });
    console.log("Message sent: %s", info.messageId);
}

sender()