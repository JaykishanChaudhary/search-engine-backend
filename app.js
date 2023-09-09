const express=require('express');
const app=express();
const port=5000;
// const mongoose=require('mongoose');
const JobRouter=require('./router/JobDescription.route');
const cors=require('cors');

app.use(cors());
app.use(express())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(JobRouter);
// app.use(cors());


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
