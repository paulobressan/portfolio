# Portfolio template

This project is a template for a professional portfolio where you don't need to code to fill in your data. You just need to fill in your information in the portfolio.json file, and if you want to keep images in the repository itself, you can place them in the "public" folder and set the path in the JSON file as "/image-name.png".

[demo](https://paulobressan.com)

## Deploy

To easily deploy the template, you can use Vercel. By connecting your GitHub account to Vercel, it will create a copy of the template in your GitHub repository. From there, you can edit the "portfolio.json" file with your own data, all directly from GitHub.

[vercel](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fpaulobressan%2Fportfolio&showOptionalTeamCreation=false)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
