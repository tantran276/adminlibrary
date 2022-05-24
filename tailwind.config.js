// eslint-disable-next-line import/no-extraneous-dependencies
const lineClampPlugin = require("@tailwindcss/line-clamp");

module.exports = {
    content: ["./src/**/*.{jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [lineClampPlugin],
};
