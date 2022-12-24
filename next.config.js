/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: false
});

// module.exports = withPWA({
//   reactStrictMode: true,
// });
module.exports = {
  reactStrictMode: true,
  // disableExperimentalFeaturesWarning: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};