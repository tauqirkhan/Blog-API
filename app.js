const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const PORT = 3000;

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);

app.listen(PORT, () => {
  console.log(`App is live at - http://localhost:${PORT}/`);
});
