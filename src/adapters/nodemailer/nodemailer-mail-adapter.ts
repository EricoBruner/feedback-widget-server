import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "822001d6fb007a",
    pass: "b9e377f313af3e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: 'Erico Bruner <ericodasilvabruner@gmail.com>',
      subject,
      html: body,
    }) 
  }
}