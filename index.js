const server = require("./data/api/server.js");

const port = process.env.PORT || 5009;
server.listen(port, () => {
    console.log(`server is running on port 5009`)
});