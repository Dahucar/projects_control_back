const express   = require('express');
const cors      = require('cors');
require('dotenv').config(); 

const app       = express();
const projectRouter = require('./routes/Project.routes');

// server varibles
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api', projectRouter);

// run server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});