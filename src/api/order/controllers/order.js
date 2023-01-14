"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::order.order');
module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async me(ctx) {
    const authenticatedUser = ctx.state.user;
    console.log(authenticatedUser);

    if (!authenticatedUser) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    const data = await strapi
      .service("api::order.order")
      .find({ user: authenticatedUser.id });

    if (!data) {
      return ctx.notFound();
    }

    const sanitizedEntity = await this.sanitizeOutput(data, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
