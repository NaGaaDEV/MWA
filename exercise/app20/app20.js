const express= require("express");
const app= express();
app.set("port", 3000);
const server= app.listen(app.get("port"));
// this is bad because its blocking code incase another port is called and it will lock
//check slide for solution

console.log("Listening to port "+ server.address().port);