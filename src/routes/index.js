import { testsRoutes } from './v1';
import { Router } from 'express';
const app = Router()

app.use('/api/v1/tests', testsRoutes)

export default app;