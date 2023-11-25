import app from './app'
import config from './app/config';
const mongoose = require('mongoose');


const PORT = config.port

async function main() {
  try{
    await mongoose.connect(config.database_url);
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
  }
  catch(err){
    console.error(err)
  }
}


main()