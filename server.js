const express = require('express');
const app = express();
const cors = require('cors');
const { configDotenv } = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');
const port = 8000;
configDotenv


app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));  

app.use('/api/email', emailRoutes);
require("./config/mongoose.config");
require('./routes/report.routes')(app);
require('./routes/maintenance.routes')(app);
require('./routes/equipment.routes')(app);
require('./routes/obsolete.routes')(app);
require('./routes/user.routes')(app);
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})


require('./routes/report.routes')(app);
require('./routes/maintenance.routes')(app);
require('./routes/equipment.routes')(app);
require('./routes/obsolete.routes')(app);