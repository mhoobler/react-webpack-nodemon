import * as express from "express";
import * as path from "path";
const app = express();
const PORT = process.env.port || 3001;

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("/test", (req, res) => {
  res.send({ message: "test" });
});

//app.get("/", (req, res) => {
//  console.log(req);
//  res.send({message: "test"});
//  res.sendFile(path.join(__dirname, "client/dist/index.html"));
//});

// If we don't recognize the route, try to see if it's in the build, or else 404
//app.get("*", (req, res) => {
//  console.log(req)
//  res.sendFile(path.join(__dirname, "client/dist/" + req.route.path));
//});

app.listen(PORT, () => {
  console.log("app listening");
});
