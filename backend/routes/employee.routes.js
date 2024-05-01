const express =require("express");
const app=express();

const employeeRoute = express.Router();
let EmployeeSchema = require("../model/employee.model");

employeeRoute.route("/").get((req,res)=>{
    EmployeeSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

employeeRoute.route("/employee/:id").get((req,res)=>{
    EmployeeSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
});



employeeRoute.route("/add-employee").post((req,res,next)=>{
    EmployeeSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})

//delete method

employeeRoute.route("/del-employee/:id").delete((req,res)=>{
    EmployeeSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})

//update method

employeeRoute.route("/update-employee/:id").put((req,res)=>{
    EmployeeSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data);
            console.log("updated successfully")
        }
    })
})


module.exports = employeeRoute;