const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config({ path: __dirname + '/../config/.credentials' });
//require('./controller/tuyapi').default;


const app = express();
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('', require('./router/router'));

app.listen(app.get('port'), () => {
  console.log(`Server on ${app.get('port')}`);
});
