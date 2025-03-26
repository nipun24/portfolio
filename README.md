# This is my blog

This blog has been created using Astro and DecapCMS. The oauth for decapCMS is written to be hosten using vercel functions.

## How to run this blog

1. Clone this repo
2. Install dependencies
   ```bash
   pnpm install
   ```
3. Run the development server
   ```bash
   pnpm dev
   ```
4. Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.
5. Open [http://localhost:4321/admin/index.html](http://localhost:4321/admin/index.html) to see the admin panel.

## Create gitlab oauth

1. Create a new gitlab oauth app
1. Add the redirect url as `https://domain/admin/api/callback`
1. Copy the client id and secret and add them to the `.env` file

## Add blogs using admin interface

1. Create vercel account
2. Create a new project
3. Run `pnpm develop` to start the dev server and admin server
