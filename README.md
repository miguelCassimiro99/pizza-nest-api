# Pizza Nestjs API

This project is compound by a Nestjs API Rest using Prisma to deal with DB. The main features used on this project had the goals to understand some principles of SOLID and understand the authentication flow.

How does it works 🔍

- The API have a few routes but the mainly includes the login and the user creation. It may seem little implementation, but if you dig into the ‘dirs’ you will see the how the login flow (for example), can be a big implementation.
- For example: not just for use Solid, but to undestand about the modules and services, use the Guards to ensure that all routes will be protected and understand how strategies work when using Nest.js. The all package shows the power of this framework and I kind like to work using it. I think for even simple APIs the Nest demonstrate a good flow to work with and a good responsible organization (functionally and visually).
- The authentication flow used implements JWT as security;

**Login info:**

```json
// /login
"email": "miguel@cassimiro.tech"
"password": "Abc@123"
```

### Tools 🛠️

🌐 Nest.js

🌐 Passport

🌐 Prisma

🌐 JWT

🌐 [Typescript](https://www.typescriptlang.org/)

---

## Features 📜

- [x]  User creation
- [x]  Login
- [x]  Prisma implementation
- [x]  JWT
- [ ]  Use Docker to build the application (💻 working)

---

## Setup 🏗️

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

<aside>
💡 To work with the front-end of this project the server was exposed on the port 3333

</aside>

## Installation

```
$ npm install
```

## Running the app

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

## Test

```
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com/)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://www.notion.so/LICENSE).