# Scheduling Application

This application is made up of 3 seperate parts.

1. The Main REST API built with Node/Express
2. The Webapp built with React
3. The Marketing/Landing Page built with Next.js

- The Applications main Database will be <strong>Mongodb</strong>
- It will be styled using <strong>Tailwind CSS</strong>

The app will have it's own component library to keep the look and feel the same through two front-ends

## Project Setup

### Tailwind Setup for the Webapp

1. Followed the [Tailwind Install guide](https://tailwindcss.com/docs/guides/create-react-app) for create-react-app.
2. Installed [Tailwind Line Clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp) using the following code
   ```bash
   npm install @tailwindcss/line-clamp
   ```
3. Add the plugin and configure the Tailwind Config File

   ```js
   //tailwind.config.js
   module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {
         scale: ["hover", "active"],
       },
     },
     plugins: [require("@tailwindcss/line-clamp")],
   };
   ```

### Tailwind Setup for the Landing Page/Next.js

This process was very similar to the guide above with minor changes

1. Followed the [Tailwind Install guide](https://tailwindcss.com/docs/guides/nextjs) for create-react-app.

2. Installed [Tailwind Line Clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp) using the following code
   ```bash
   npm install @tailwindcss/line-clamp
   ```
3. Add the plugin and configure the Tailwind Config File

   ```js
   //tailwind.config.js
   module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {
         scale: ["hover", "active"],
       },
     },
     plugins: [require("@tailwindcss/line-clamp")],
   };
   ```
