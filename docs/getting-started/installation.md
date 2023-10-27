# Installation

<!--
okay what do we need first
- requirements for the project
- what the

 -->

## Requirements

- [Node.js](https://nodejs.org/en/download/) version 20.5.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies

## Setup

Make sure you're running Node.js v20.5.0 and NPM 9.8.0, to verify and upgrade NPM do:

```bash
node --version
npm --version
npm i -g npm@latest
```

1. Clone this repository

```bash
git clone https://github.com/joinpickup/web.git
cd web/codde
```

2. Install dependencies

```bash
yarn
```

3. Run Web

```bash
yarn dev
```

To build Web for production.

```bash
yarn build
```
