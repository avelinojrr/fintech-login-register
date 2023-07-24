import app from "./app.js";
import { connectDB } from "./db.js";

// code to connect to database
connectDB();

// initialize server
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
