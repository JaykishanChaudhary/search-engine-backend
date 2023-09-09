// const mongoose=require('mongoose');


// const JobDesSchema=new mongoose.Schema({
//     jobtype:{
//         type:String
//     },
//     language:{
//         type:String
//     },
//     CompanyName:{
//         type:String
//     },
//     experience:{
//         type:Number
//     },
//     location:{
//         type:String
//     },
//     JobDescription:{
//         type:String
//     },
//     KeySkills:{
//         type:String
//     }
// })


// const JobDesModel=mongoose.model('JobDescriptionCollection',JobDesSchema);

// module.exports=JobDesModel
const sequelize=require('../db');
const { DataTypes } = require('sequelize');

// Define a Sequelize model for the "JobDescription" table
const JobDesModel = sequelize.define('JobDescription', {
  jobtype: {
    type: DataTypes.STRING
  },
  language: {
    type: DataTypes.STRING
  },
  CompanyName: {
    type: DataTypes.STRING
  },
  experience: {
    type: DataTypes.INTEGER
  },
  location: {
    type: DataTypes.STRING
  },
  JobDescription: {
    type: DataTypes.STRING
  },
  KeySkills: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'JobDescriptionCollection',
  schema: 'search-project'
});

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync()
  .then(() => {
    console.log('JobDescription table created (if not exists)!');
  })
  .catch((error) => {
    console.error('Error creating JobDescription table:', error);
  });

module.exports = JobDesModel;
