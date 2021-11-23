const nodemailer = require("nodemailer");
const router = require("express").Router();

const emailUser =  'example@mail.com';
const emailPassword =  'password#';

const mailTransporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: emailUser,
        pass: emailPassword
    }
})

router.post("/api/contact", async (req, res) => {
    const email = {
        from: emailUser,
        to: emailUser,
        subject: "Test mail",
        text: `
            From: ${req.body.name}\n
            Email: ${req.body.email}\n
            Phone: ${req.body.phone}\n
            Message: ${req.body.message}\n
        `
    };

    try{
        await mailTransporter.sendMail(email)
    }
    catch (err){
        res.statusCode = 400;
    }
    res.send();
});

module.exports = router;

