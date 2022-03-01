<h1 align="center">
  Leonardo Lissone
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demonstration">Demonstration</a>
</p>
<br />
<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT" alt="License">
  <img src="https://img.shields.io/github/repo-size/Lissone/leonardo-lissone" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/leonardo-lissone" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/leonardo-lissone" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/leonardo-lissone" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/leonardo-lissone" alt="Pull requests" >
  <img src="https://img.shields.io/github/last-commit/Lissone/leonardo-lissone" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/leonardo-lissone/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/leonardo-lissone/issues">Request feature</a>
</p>

<br />

## Description

Since the beginning of my journey with web application development, I had a lot of desire to create my own website, to have a focal point for all my experiences, projects, stories and mainly to increase and facilitate the contact network. I've waited until the moment where I feel comfortable and safe enough to do exactly as I would like.

Everything in this project was developed with a lot of love, dedication and will, following all the development steps that I created with me until this moment. From creating a simple requirements documentation, prototyping an interactive interface in Figma to creating a universal template for my Next.js applications to increase productivity when developing new React projects.

The idea of ​​creating a portfolio / bio site is very interesting, but considering that our evolution is constant, updating this application would be very repetitive and ineffective. Therefore, I integrated my project with Prismic CMS, where I control all texts and project posts in as many languages ​​as I want to add, making the application as dynamic as possible.

## Requirements

- [Nodejs](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)

## Technologies

- ReactJs
- NextJs
- Typescript
- StyledComponents
- Prismic CMS
- Eslint
  - Airbnb-config with another pessoal rules
  - Import helpers plugin
- Prettier
- Commitlint
  - Commitizen

## Layout

You can view the project layout via this <a href="https://www.figma.com/file/VufrifzcSAEctTBgUFjzPT/Portif%C3%B3lio?node-id=0%3A1" target="_blank">link</a>.

## Usage

You can clone it on your pc using the command:

```bash
git clone https://github.com/Lissone/leonardo-lissone.git
cd leonardo-lissone
```

Install dependencies using:

```bash
yarn
#or
npm install
```

Enable husky git hooks:

```bash
yarn husky install
#or
npx husky install
```

Need to add environment variables:

```bash
# .\.env.local

# Primisc CMS
PRISMIC_API_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```

Run application:

```bash
yarn dev
#or
npm run dev
```

## Demonstration

<img src="./.github/leonardo-lissone-demo.gif" alt="Demo Leonardo Lissone Website" width="100%" height="100%"/>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
