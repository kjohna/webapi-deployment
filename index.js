require('dotenv').config();
const server = require('./api/server.js');

// a hosting service might assign a port dynamically. use an environment variable instead
// Environment Variables are system wide. local comp vs. remote server have different values. need to tell Node how to get these values.

const port = process.env.PORT || 4000; // use 4000 if not provided in .env

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
