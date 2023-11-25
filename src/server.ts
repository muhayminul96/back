import app from './app'
const mongoose = require('mongoose');
const PORT : number =  3000;


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });