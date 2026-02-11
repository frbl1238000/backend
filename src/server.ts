import Express from "express";
import routes from "./routers.js";
import cors from "cors";

const app = Express();
app.use(Express.json());
app.use(cors());

app.use("/", routes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
