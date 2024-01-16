import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT ;
connectToDatabase()
  .then(() => {
    app.listen(5001, () =>
      console.log("Server Open & Connected To Database 🤟",PORT)
    );
  })
  .catch((err) => console.log(err));
