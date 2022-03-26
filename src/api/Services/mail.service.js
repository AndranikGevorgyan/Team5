const nodemailer = require("nodemailer");

class MailService {
    constructor() {
        let smtpConfig = {
            host: process.env.HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.SUPPORT_EMAIL,
                pass: process.env.SUPPORT_EMAIL_PASSWORD
            }
        };

        this.transporter = nodemailer.createTransport(smtpConfig);
    }
    async sendActivationMail(to, link) {
        try {
            await this.transporter.sendMail({
                from: process.env.SUPPORT_EMAIL,
                to: to,
                subject: "Activating Account" + process.env.API_URL,
                text: "",
                html:

                    `<div>
                    <h1>Please click to activation link</h1>
                    <a href="${link}">${link}</a>

                </div>`
            })
        } catch (error) {
            if (error) {
                console.log(error)
            }
        }
    }
}

module.exports = new MailService();