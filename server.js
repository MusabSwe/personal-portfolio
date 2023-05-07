const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "malqarninet@gmail.com",
        pass: "Mm332211$",
        clientId: "28182292526-m30ot11lgbbvl3cn1fmt3cp7b69o3r3e.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken: "1//04pCb9ovWlYyhCgYIARAAGAQSNwF-L9IrYBKwph0_0uCxlr_5068ZORphB5ZOTW6qrAwcYRJfmlPcO-Tuvg-8jO3ONhZ6-45e78M"
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "malqarninet@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});