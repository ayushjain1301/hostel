const StudentDetails = require('../models/studentModel.js')

exports.getStudentDetails = async (req, res) => {

    if(req.body.number){
       const user = await StudentDetails.findOne({firstname : req.body.number})
           
          if(user){

            StudentDetails.findOne({firstname : req.body.number}, 
                function(err, data){
                res.send(data)
            })
          
    }
    else{
res.send("400")
    }

    }}