const { PORT = 3333 } = process.env;
const app = require("./app");

const listener  = () => console.log(`Listening closely on Port ${PORT} =^._.^= ∫`);
app.listen(PORT, listener);