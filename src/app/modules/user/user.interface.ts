
// 1. Create an interface representing a document in MongoDB.

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

type User = {
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


  export default User