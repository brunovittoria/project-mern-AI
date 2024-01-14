import app from "./app.js";
import { connectToDatabase } from "./database/connection.js";
//Connections and Listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open & Connected to DB"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map