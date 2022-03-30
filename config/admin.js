module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1810e2a2d9fd32ad9721c54c23edd1e3'),
  },
});
