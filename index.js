const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "client")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));