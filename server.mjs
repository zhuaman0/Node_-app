import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = [
  { name: "John", surname: "Doe", email: "john.doe@example.com" },
  { name: "Jane", surname: "Smith", email: "jane.smith@example.com" },
  { name: "Alice", surname: "Johnson", email: "alice.johnson@example.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
