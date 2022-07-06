module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
      themes: [
        {
          toolstheme: {
          primary:"#404040",
          secondary:"#262626",
          neutral:"#ed8936"
          },
        },
      ],
    },
    plugins: [require('daisyui')],
  }
  