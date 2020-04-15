let express = require("express");
let app = express();
let PORT = process.env.PORT;
let persons = [
  {
    id: 0,
    name: "Donnukrit Satirakul",
    age: 18,
    province: "Nakorn Sri Thammarat",
  },
  {
    id: 1,
    name: "Jonh Doe",
    age: 21,
    province: "London",
  },
];

app.get("/", (req, res) => {
  console.log(persons);
  res.json(persons);
});

app.get("/crash", (req, res) => {
  console.log("Crashed");
  res.send("Crashed");
  process.exit(1);
});
app.listen(PORT, () => console.log("SERVER HAS BEEN RUN ON PORT", PORT));
