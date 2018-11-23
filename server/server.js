
const app = require('./app');
const databaseConfig = require('./config/db');
app.listen(process.env.PORT || 5000, ()=>{
  console.log('server running at port ' + databaseConfig.port);
});