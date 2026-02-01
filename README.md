# React News App

A simple React project that fetches news articles using the [News API](https://newsapi.org/). Built with **Vite**, **React**, and **Material UI**.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Setting up the API Key](#setting-up-the-api-key)
* [Running the Project](#running-the-project)
* [Project Structure](#project-structure)
* [License](#license)

---

## Demo

*(Optional: add a screenshot or link to a live demo here)*

---

## Features

* Fetch latest news articles from News API
* Search news by category
* Supports multiple categories per article
* Responsive UI with Bootstrap
* Environment variable configuration for API key

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* npm (comes with Node.js) or yarn

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-news-app.git
cd react-news-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

---

### Setting up the API Key

1. Go to [News API](https://newsapi.org/) and sign up for a free account.
2. Once logged in, you’ll get an **API key**.
3. Create a `.env` file in the root of your project:

```bash
touch .env
```

4. Add your API key to `.env` using this format:

```env
VITE_API_KEY=your_api_key_here
```

> **Important:** In Vite projects, all environment variables that should be exposed to the frontend **must start with `VITE_`**. That’s why we use `VITE_API_KEY`.

5. Save the file. The `.env` file is already in `.gitignore` to avoid accidentally pushing your key to GitHub.

---

## Running the Project

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and go to `http://localhost:5173` (or the URL provided in the terminal) to view the app.

---

## Using the API Key in React

Here’s an example of how to use your `VITE_API_KEY` in a fetch call:

```javascript
const apiKey = import.meta.env.VITE_API_KEY;

fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

## Project Structure

```
react-news-app/
├─ public/
├─ src/
│  ├─ components/
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ package.json
├─ vite.config.js
└─ README.md
```

