const JobDesModel=require('../Model/JobDescription');
// const { sequelize } = require('../app');

exports.CreateJob=(async(req,res)=>{
    try{
        const {jobtype,language,CompanyName,experience,location,JobDescription,KeySkills}=req.body;
        console.log(req.body)
        const NewJob=await JobDesModel.create({
            jobtype,
            language,
            CompanyName,
            experience,
            location,
            JobDescription,
            KeySkills
        })
        res.status(200).json({
            status:"success",
            result:NewJob
        })
    }catch(err){
        res.status(500).json({
            status:'fail',
            result:err
        })
    }
})


// exports.GetJob=(async (req,res)=>{
//     try{
//         const {language,location,experience}=req.query;

//         const filter={};

//         if(language){
//             filter.language=language;
//         }
//         if(location){
//             filter.location=location;
//         }
//         if(experience){
//             filter.experience=experience
//         }
//         const JobList=await JobDesModel.find(filter);
//         console.log(JobList)
//     if(JobList){
//         res.status(200).json({
//             status:'success',
//             result:JobList
//         })
//     }else{
//         res.status(400).json({
//             status:'fail',
//             result:'Data not found'
//         })
//     }

//     }catch(err){
//         res.status(500).json({
//             status:'fail',
//             result:err
//         })
//     }
    
// })


const { Sequelize, Op } = require('sequelize');

exports.GetJob = async (req, res) => {
  try {
    const { experience } = req.query;
    const language = decodeURIComponent(req.query.language);
    const KeySkills = decodeURIComponent(req.query.KeySkills);
    const location = decodeURIComponent(req.query.location);
    const CompanyName = decodeURIComponent(req.query.CompanyName);
    let valuesToSearch=KeySkills.split(',');
    console.log(req.query)
    // Define the filter object
    const filter = {};

    // Build the filter based on query parameters
    if (language!='undefined') {
    //   filter.language = language;
      filter.language = { [Op.iLike]: `%${language}%` };
    }
    if (location!='undefined') {
      filter.location = {[Op.iLike]:`%${location}%`};
    }
    if (typeof(parseInt(experience))=='number') {
      // In PostgreSQL, you can use the [Op.eq] operator for equality
      filter.experience = { [Op.eq]: parseInt(experience) };
    }
    if (CompanyName!='undefined') {
        filter.CompanyName = {[Op.iLike]:`%${CompanyName}%`};
      }

      if (KeySkills !== 'undefined') {
        filter.KeySkills = {
          [Op.iLike]: {
            [Op.any]: valuesToSearch.map((value) => `%${value}%`),
          },
        };
      }

      console.log('filter',filter);

    // Query the PostgreSQL database using Sequelize
    const JobList = await JobDesModel.findAll({
      where: filter,
      attributes: ['jobtype', 'language', 'CompanyName', 'experience', 'location', 'JobDescription', 'KeySkills'],
    });

    // Check if data is found
    if (JobList) {
      res.status(200).json({
        status: 'success',
        result: JobList,
      });
    } else {
      res.status(400).json({
        status: 'fail',
        result: 'Data not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      result: err.message, // Use err.message to get the error message
    });
  }
};


