### Node Api

## Architecture & Folder structure

The project is structured using a layered architecture, separating Persistence, Business logic and Routing. Specifically, Repositories, Services and Routers

Models are used to define your database entities and are passed through layers before. Then, serializers are in charge of exposing the correct data to the end user (so, at router level in this case).

The folder structure is [component-based](https://github.com/i0natan/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md).
Assign a folder in your project root for each business component and make it self-contained - other components are allowed to consume its functionality only through its public interface or API (in this case, the `index.ts` file).

Apart from that, the following folders are present:

- `dist`: Stores all .js files built by the TypeScript compiler.
- `public`: Exposes publicly hosted files.
- `src`: Root folder for our codebase.
- `constants`: Constant definition such as status codes, enums, etc.
- `db`: Database related configurations and migration files.
- `models`: All entity models.
- `middlewares`: Express Middlewares.
- `utils`: Helpers such as loggers, date handling, etc.
- `tasks`: Used to store any standalone custom script that you would expose on your `package.json`

## Environment setup

- `Dotenv` is set up to manage environment variables locally, use the `.env.sample` file as a base and use one `.env` file per environment (so, development, test and production).
- `ormconfig` stores the base configuration for TypeORM.

## Scripts

The following scripts are provided as tooling to interact with the database, tests, builds, etc:

- `npm run lint`: Runs tslint with automatic fixes enabled.
- `npm run build`: Builds all files for release.
- `npm run dev`: Spins up the TS compiler and the backend concurrently for developing using hot reload.
- `npm run start`: Starts the backend (from the dist folder).
- `npm run db:sync`: Syncs the database, it **should not be used in production, since it can override data**.
- `npm run db:drop` Drops the database
- `npm run db:migrate` Runs migrations
- `npm run db:logsync` Compares the current db schema to see if new changes would need to be applied when running db:sync.
- `npm run db:migrate-generate --n migration-name`: Generates a migration by diffing the changes on your entities.
- `npm run db:migrate-create`: Generates an empty migration file.
- `npm run tests`: run tests.

## Dependencies

- `express`: http://expressjs.com/ for our routing layer.
- `typeorm`: https://github.com/typeorm/typeorm as our ORM.
- `@hapi/joi`: https://github.com/hapijs/joi for json validation.
- `pino`: https://github.com/hapijs/joi for logging.
- `dotenv`: https://github.com/motdotla/dotenv for environment management.
- `pg`: https://github.com/motdotla/dotenv PostgreSQL adapter.
- `body-parser`: https://github.com/expressjs/body-parser middleware json parsing.
- `bull`: https://github.com/OptimalBits/bull#readme queue processing.
- `nodemailer`: https://nodemailer.com/ as our mail engine.

### Test Dependencies

- `mocha`: https://mochajs.org/ as our testing framework.
- `chai`: http://chaijs.com assertion library.
- `sinon`: https://sinonjs.org/ for mocks and stubs.
- `supertest`: https://github.com/visionmedia/supertest for router testing.

## License

**MiTurnoApi** is available under the MIT license. See the LICENSE file for more info.
