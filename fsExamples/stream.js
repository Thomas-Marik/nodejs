const fs = require("fs");

const rs = fs.createReadStream("./files/newReply.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/newLore.txt");

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });
rs.pipe(ws);
