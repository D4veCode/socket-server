'use-strict'
import { Router } from 'express'
import { getMessage } from '../../controllers';

const app = Router();

app.get('/', async (req, res) => {
  let message = getMessage();
  console.log(message);
  res.status(200).json(message)
})

export default app