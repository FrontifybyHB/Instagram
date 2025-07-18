import app from "./src/app.js"; 
import connectDB from './src/db/db.js'
import config from './src/config/config.js'

const port = config.PORT;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});