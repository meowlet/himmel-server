# Himmel 🌌: A Celestial Web Server

[![Bun.js](https://img.shields.io/badge/bun.js-powered-orange)](https://bun.sh/)
[![Elysia.js](https://img.shields.io/badge/elysia.js-framework-blue)](https://elysiajs.com/)
[![TypeScript](https://img.shields.io/badge/typescript-typesafe-blue)](https://www.typescriptlang.org/)

Himmel is a web server designed to reach for the stars, built upon the blazing-fast Bun.js runtime and the elegant Elysia.js framework. It embodies a strict Model-View-Controller (MVC) architecture, ensuring a clear separation of concerns, and leverages TypeScript for unparalleled type safety.

## Features ✨

- **Bun.js Powered:** Harnessing the incredible speed and efficiency of Bun.js for a truly responsive experience.
- **Elysia.js Grace:** Built with the simplicity and elegance of Elysia.js, making development a joy.
- **TypeScript Fortress:** Type safety at its core, preventing errors before they even occur.
- **MVC Architecture:** A clean and organized codebase, making maintenance and scaling a breeze.
- **MongoDB Integration:** Seamlessly connects to your MongoDB database for persistent data storage.
- **JWT Authentication:** Secure your API endpoints with industry-standard JSON Web Tokens.

## Getting Started 🚀

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/meowlet/himmel-server
   cd himmel
   ```

2. **Install Dependencies:**

   ```bash
   bun install
   ```

3. **Configure Your Environment:**

   - Create a .env file in the root directory.
   - Fill in the following values (replace placeholders with your actual credentials):

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the Server:**

   ```bash
   bun run index.ts
   ```

Himmel will now be listening on http://localhost:3000 (or the port you've configured)
