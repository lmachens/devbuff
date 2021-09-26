/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/js/script.js",
        destination: "https://stats.devbuff.de/js/plausible.js",
      },
      {
        source: "/api/event",
        destination: "https://stats.devbuff.de/api/event",
      },
    ];
  },
};
