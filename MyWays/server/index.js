import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);

const MongoUrl = 'mongodb+srv://prajwal:prajwal@myways.qa4qp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log(`server ruuning on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);


