const express = require("express");
const app = express();

const user = [
  {
    name: "john",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());
app.get("/", function (req, res) {
  const johnkidney = user[0].kidney;
  const numberOfKidneys = johnkidney.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnkidney.length; i++) {
    if (johnkidney[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidney.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
app.listen(3000);
