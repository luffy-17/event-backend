module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '20802e7b3280c4d9bb88941ce693aae5'),
  },
});
