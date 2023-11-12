import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ba9fa284474f40",
    pass: "353e7701b8a986"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Pedro Renan <prenansb@gmail.com>',
    subject,
    html: body
  })
  };
}