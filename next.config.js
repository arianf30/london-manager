/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "ui-avatars.com",
//       "londonmanager.com",
//       "lh3.googleusercontent.com",
//     ],
//   },
// }

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "ui-avatars.com",
      "londonmanager.com",
      "lh3.googleusercontent.com",
    ],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
})
