import { Schema, model, connect } from 'mongoose';
import User from './user.interface';
import config from '../../config';
const bcrypt = require('bcrypt');

const userSchema = new Schema<User>({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: [{ type: String, required: true }],
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    orders: [
      {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      }, 
    ],
  });


  userSchema.pre('save',async function (next){
    const user = this

    this.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
    
    console.log("saving");

    next();
    
  })

  userSchema.post('save',function(){
    
    this.password = ''
    
    console.log("done");
    
  })


  export const UserModel = model<User>('User', userSchema);