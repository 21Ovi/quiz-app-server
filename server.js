import express from "express";

const app = express();

// routes
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(8080, () => {
  console.log(`server connected to http://localhost:8080`);
});
