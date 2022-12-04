/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: false
});

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    AIRTABLE_API_KEY: "keyHA9y1ULTuiFbip",
    AIRTABLE_BASE: "apprPGufGULFFjdvQ",
    AIRTABLE_TABLE: "chair",
  },
});