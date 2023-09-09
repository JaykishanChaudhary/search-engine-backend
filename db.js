

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('jaykishan', 'postgres', 'Gagan*123', {
    host: 'localhost',
    dialect:   'postgres'
  });

async function Start(){

    
    // // Option 1: Passing a connection URI
    // const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
    // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
    
    // // Option 2: Passing parameters separately (sqlite)
    // const sequelize = new Sequelize({
    //   dialect: 'sqlite',
    //   storage: 'path/to/database.sqlite'
    // });
    
    // Option 3: Passing parameters separately (other dialects)
   
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
    
    // mongoose.connect('mongodb+srv://jaykishanchaudhary678:F8QDobBWsSAYJYaT@cluster0.1xz755a.mongodb.net/JobDescription',
    // {  useNewUrlParser:true,
    //     useUnifiedTopology:true}).then(()=>{
    //     console.log('DB connected');
    // }).catch((err)=>{
    //     console.error(err);
    // })
    
    
    }
    
    module.exports=sequelize;
    Start();
        