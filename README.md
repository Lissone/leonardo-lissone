<h1 align="center">
  Leonardo Lissone
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demonstration">Demonstration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a>
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

Everything in this project was developed with a lot of love, dedication and will.

Since the beginning of my journey with web application development, I desire to create my own portfolio website, to have a focal point for all my experiences, projects, stories and mainly to further increase the networking. I've waited until the moment where I felt more comfortable and skilled enough to do exactly as I wanted.

This portfolio is intended to show my development path, steps and skills that I achieved to this moment, since creating a simple requirements documentation, prototyping an interactive interface in Figma to creating a universal template for my Next.js applications to increase productivity when developing new React projects.

## Demonstration

https://user-images.githubusercontent.com/57052110/227630290-5e0c5cd1-87ca-41de-a694-4d59280db573.mp4

## Requirements

- [Nodejs](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)

## Technologies

- ReactJs
- NextJs
- Typescript
- React GA (Google Analytics)
- StyledComponents
- React Hook Form
- Yup
- EmailJs
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

# GOOGLE ANALYTICS
NEXT_PUBLIC_GA_TRACKING_ID=

# EMAILJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Run application:

```bash
yarn dev
#or
npm run dev
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
