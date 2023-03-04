import express from 'express';
import { router } from './router';

const app = express()
app.use(express.json())

app.use(router);

const port = 3001;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);

})