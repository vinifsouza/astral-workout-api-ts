import express from 'express'
import UserRouter from './users.router';

const router = express.Router();

// users
router.use('/users', UserRouter());

// app
router.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

router.all('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' });
})

export default router;
