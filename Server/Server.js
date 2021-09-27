import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());


app.listen(3300, () => {
    console.log("Cheguei Aqui");
})


app.post("/sendmail", (req, res) => {
    console.log("request foi");
    let user = req.body;

    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Falha ao enviar o email" })
        } else {
            console.log('Email enviado com sucesso');
            res.send(info);
        }
    })
})


const sendMail = (user, (callback) => {
    const transporter = nodemailer.createTransport({
        smtp: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "",
            pass: ""
        }
    })
})

const mailOptions = {
    from: "",
    to: "lcas.patrick2506@gmail.com",
    subject: "",
    html: ""
};

transporter.sendMail(mailOptions, callback)