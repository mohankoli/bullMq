// const connection = {
//   host: 'redis-14805.crce206.ap-south-1-1.ec2.cloud.redislabs.com',
//   port: 14805,
//   username: 'default',
//   password: 'sQDR31UPZnlLWvqXYG2TijLV4isNjjQp',

//   tls: {
//     servername: 'redis-14805.crce206.ap-south-1-1.ec2.cloud.redislabs.com',
//     rejectUnauthorized: false,
//   },

//   connectTimeout: 30000,
//   maxRetriesPerRequest: null,
// };

// module.exports = connection;

module.exports = {
  connection: {
    url: 'rediss://default:sQDR31UPZnlLWvqXYG2TijLV4isNjjQp@redis-14805.crce206.ap-south-1-1.ec2.cloud.redislabs.com:14805',
    tls: {
      rejectUnauthorized: false,
    },
  },
};


