# EStore Project Setup

This is a Next.js estore project.

## Step 1: Clone the Repository

Clone the project repository to your local machine using the following command:

```shell
git clone https://github.com/xementor/estore.git
```

Navigate to the project directory:

```shell
cd estore
```

## Step 2: Create an Environment File

Rename `.env.example` to `.env` using the following command:

```shell
mv .env.example .env
```

## Step 3: Add Required Environment Variables

1. Open the `.env` file in a text editor.
2. Add the required environment variables as specified in the project's documentation. These environment variables typically contain configuration settings such database connection strings, and other sensitive information. Example `.env` file:

```js
API_KEY = your_api_key_here;
DATABASE_URL = your_database_url_here;
NEXTAUTH_SECRET = your_secret;
NEXTAUTH_URL = "http://localhost:3000";

DISCORD_CLIENT_ID = your_discord_clint_id;
DISCORD_CLIENT_SECRET = your_discord_client_secret;
```

Replace `your_api_key_here`, `your_database_url_here` , `your_secret`, `your_discord_clint_id` and `your_discord_client_secret` with the actual values

## Step 4: Install Project Dependencies

Install project dependencies using npm:

```shell
npm install
```

## Step 5: Run the Project

Start the Next.js development server:

```shell
npm run dev
```
