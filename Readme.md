# Express CRUD Maker

`express-crud-maker` is a command-line tool that generates boilerplate code for creating a CRUD (Create, Read, Update, Delete) application using Express.js. It automatically generates files for models, types, routes, controllers, managers, and DTOs based on user-defined models and attributes.

## Installation

You can use `express-crud-maker` by running the following command:

```bash
npx express-crud-maker
```

## Usage

To generate a CRUD app, use the following command:

```bash
npx express-crud-maker -n [model] -f [attributes]
```

Replace [model] with the name of the model you want to generate, and [attributes] with a comma-separated list of attributes in the format name:type. For example:

```bash
npx express-crud-maker -n user -f name:string,email:string,password:string
```

This command will generate the necessary files for a user CRUD application, including the model, types, routes, controllers, managers, and DTOs.

To view the available options and usage instructions, run:

```bash
npx express-crud-maker -h
```

## Generated Files

The express-crud-maker package generates the following files:

[Model].model.ts: Contains the Prisma model definition for the specified model.

[Model].type.ts: Defines TypeScript types based on the provided attributes using Zod validation.

[Model].route.ts: Contains the CRUD routes for the specified model.

[Model].controller.ts: Implements the route handlers and controller logic for the specified model.

[Model].manager.ts: Contains the business logic for the specified model.

[Model].dto.ts: Defines the database queries using the Prisma model for CRUD operations.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/AdnanIqbalKhan/express-crud-maker.git).

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
