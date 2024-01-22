const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const routes = require("./routes");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Assignment API",
      version: "0.1.0",
      description:
        "API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Test User",
        url: "https://example.com",
        email: "info@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`App Server is running on port ${PORT}.`);
});

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
  console.log("Database Connected");
});

// db.sequelize.sync();

app.use("/", routes);
