import { Model } from 'mongoose';
// Create an interface representing a document in MongoDB.

type Address = {
    street: string;
    city: string;
    country: string;
  };
  
  type Order = {
    productName: string;
    price: number;
    quantity: number;
  };

export type User = {
    userId: number;
    username: string;
    password: string;
    fullName: {
      firstName: string;
      lastName: string;
    };
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: Address;
    orders: Order[];
  };

 export interface UserModel extends Model<User> {
    isUserExist(id:string): Promise < User | null> ;
  }


  // export default User