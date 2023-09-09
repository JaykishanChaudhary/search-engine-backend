const express=require('express');
const Router=express.Router();
const JobController=require('../Controller/JobDesController');


Router.post('/JobDescription',JobController.CreateJob);
Router.get('/JobList',JobController.GetJob);

module.exports=Router;