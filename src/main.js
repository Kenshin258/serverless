const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
const { RtUser } = require("./router/user.router");

const app = express();

// const USERS_TABLE = process.env.USERS_TABLE;
// const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());

app.use("/user", RtUser);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.main = serverless(app);
