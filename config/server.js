module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["c4YiWIQ0C0GL8egTbQI2XQ==","1GCg2JAZf6lyVnZhEVzpCw==","MEuhOw+zjC0QWOBx8ho/hw==","cSZGMZ8xzYM3eh1jUTM4Rg=="]
  },
});
