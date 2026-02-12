const { Worker, Queue } = require('bullmq');
const nodemailer = require('nodemailer');
const connection = require('./connection');

const errorQueue = new Queue('email-error-queue', { connection });

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'laisha.heaney72@ethereal.email',
    pass: 'UNAGVwJ7rRrW4gcGKn',
  },
});

const worker = new Worker(
  'email-queue',
  async (job) => {
    const { to } = job.data;

    if (!to.includes('@')) {
      throw new Error('Invalid email');
    }

    await transporter.sendMail({
      from: '"BullMQ" <demo@bullmq.com>',
      to,
      subject: job.data.subject,
      html: job.data.body,
    });

    console.log('✅ Sent:', to);
  },
  { connection }
);

worker.on('failed', async (job, err) => {
  await errorQueue.add('failed-email', {
    jobId: job.id,
    error: err.message,
  });
});

console.log('👷 Worker running');