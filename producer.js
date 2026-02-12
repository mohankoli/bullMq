const { Queue } = require('bullmq');
const connection = require('./connection');

const emailQueue = new Queue('email-queue', { connection });

const emails = [
  {
    to: 'mohankoli1990@gmail.com',
    subject: '✅ Welcome to BullMQ!',
    body: '<h1>Hello Mohan 👋</h1>',
  },
   {
    to: 'mohankoli1990@gmail.com',
    subject: '✅ Welcome to BullMQ!',
    body: '<h1>Hello Mohan 👋</h1>',
  },
   {
    to: 'mohankoli1990@gmail.com',
    subject: '✅ Welcome to BullMQ!',
    body: '<h1>Hello Mohan 👋</h1>',
  },
  {
    to: 'invalid-email',
    subject: '❌ This Will Fail',
    body: '<p>Invalid email</p>',
  },
];

async function sendEmails() {
  for (const email of emails) {
    await emailQueue.add('send-email', email, {
      attempts: 2,
      backoff: { type: 'fixed', delay: 1000 },
    });
    console.log('📩 Added:', email.subject);
  }

  process.exit(0);
}

sendEmails().catch(console.error);