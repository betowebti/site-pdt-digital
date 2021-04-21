module.exports = {
    async rewrites() {
      return [
        {
          source: "/Navbar/:page",
          destination: "/Navbar/Content/:page",
        },
      ]
    },
  }