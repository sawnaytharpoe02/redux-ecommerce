const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

// /!\ Bind the router db to the app
app.db = router.db;

const rules = auth.rewriter({
  // Permission rules
  users: 600,
});

// You must apply the auth middleware before the router
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(3004);
