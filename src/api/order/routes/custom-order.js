"use strict";

/**
 * order router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/orders/me",
      handler: "order.me",
      config: {
        policies: [],
      },
    },
  ],
};
