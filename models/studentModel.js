const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let student_details = new Schema({
    // firstname: {type: String, required: true, max: 25},
    // lastname: {type: String, required: true, max: 25},
    // email: {type: String, required: true, max: 50},
    // mobileNo: {type: Number, required: true,min:10},
    // addresses: {String},
    firstname : {String},
    lastname :{String},
    regno:{String},
    email:{String},
    fathername:{String},
    dob:{String},
    address:{String}
},{
    timestamps: true
});

// Export the model
module.exports = mongoose.model('StudentDetails', student_details);