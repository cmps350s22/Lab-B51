import express from 'express';
import morgan from 'morgan';
import router from './router.js';


const port = process.env.PORT || 9090;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', router);

app.listen(port, () => console.log(`server listening on http://localhost:${port}`));
