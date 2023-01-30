const withMT = require("@material-tailwind/react/utils/withMT");

const config = {
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
   ],
   theme: {
      extend: {
         backgroundImage: {
            // 'github-space': "url('./src/assets/github-background.png')"
         },
         colors: {
            'space-black': '#25272B',
            'offWhite': '#F7F7F7'
         }
      },
   },
   plugins: [],
};

module.exports = withMT(config)