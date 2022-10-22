/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = {
  reactStrictMode: true,
  env: {
    AIRTABLE_API_KEY: "keyHA9y1ULTuiFbip",
    AIRTABLE_BASE: "apprPGufGULFFjdvQ",
    AIRTABLE_TABLE: "chair",
  },
};