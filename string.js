const client = require("./client.js");

async function init() {
  //   await client.set("msg:6", "hey from nodejs");
//   await client.expire("msg:6", 10);
  const result = await client.get("msg:6");
  console.log("Result-> ", result);
}

init();
