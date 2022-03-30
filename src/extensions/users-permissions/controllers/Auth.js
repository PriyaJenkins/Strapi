"use strict";
/**
* Auth.js controller
*
* @description: A set of functions called "actions" for managing `Auth`.
*/
module.exports = {
  async refreshToken(ctx) {
    // Refresh token
    ctx.send({
      refreshed: true,
    })
  },
  async revoke(ctx) {
    // Refresh token
    ctx.send({
      revoked: true,
    })
  },
};