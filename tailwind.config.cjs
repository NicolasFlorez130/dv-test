const withMT = require("@material-tailwind/react/utils/withMT");

const config = {
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
   ],
   theme: {
      extend: {
         backgroundImage: {
            'github-space': "url('./src/assets/github-background.png')"
         },
         colors: {
            'space-black': '#25272B'
         }
      },
   },
   plugins: [],
};

module.exports = withMT(config)