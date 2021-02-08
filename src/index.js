const express   = require('express');
const cors      = require('cors');
const path      = require('path');
require('dotenv').config(); 

const app       = express();
const projectRouter = require('./routes/Project.routes');

// server varibles
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(express.json());

// public files
app.use( express.static( path.resolve( __dirname, '../public' )) );

// routes
app.use('/api', projectRouter);

// run server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});