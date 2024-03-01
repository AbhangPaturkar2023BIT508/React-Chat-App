import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

//main request
app.get("/", async (req, res) => {
  res.send("8308969121");
});

// authenticate request
app.post("/authenticate", async (req, res) => {
  //Getting username from body
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "private-key": "9c7210db-c1f3-4968-a3ea-86bf4c52715e",
        },
      }
    );
    return res.send(response.data);
  } catch (e) {
    return res.status(404).json(e.response.data);
  }
});

app.listen(3000, () => {
  console.log("Server is Running on https://localhost:3000");
});
