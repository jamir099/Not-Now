const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // path to your db.json file
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
