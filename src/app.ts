import express, { Request, Response } from 'express';
import { json } from 'stream/consumers';


const app = express();
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript!');
  });
  
  app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.send('ami paici');
  });
  
export default app