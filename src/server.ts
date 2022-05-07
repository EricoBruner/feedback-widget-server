import express from 'express';
import nodemailer from 'nodemailer';

import { prisma } from './prisma';

const app = express(); 

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "822001d6fb007a",
    pass: "b9e377f313af3e"
  }
});

app.use(express.json());

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })
  
  return res.status(201).json({ data: feedback });
})

app.listen('3333', () => {
  console.log('HTTP Server running!')
})