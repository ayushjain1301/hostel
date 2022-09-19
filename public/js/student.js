const registration_no = document.getElementById("regno");
const reg_button = document.getElementById("submit");
const reg_alert = document.getElementById("registration_alert")
const app = document.getElementById("studentresponse")

const ValidateRegistrationNo = function (reg) {
	if (reg.length > 0 && reg.length == 3) {
		return (true)
	}
	return (false)
}

reg_button.addEventListener('click', () =>{
    if(ValidateRegistrationNo(registration_no.value)){
    $.ajax({
        type: "POST",
        url:  "/studentdetail",
        data: {number:registration_no.value},
        success: function(response) {
            // console.log(response)
            if(response == "400"){
                reg_alert.innerHTML = "Student not found"
            }
            else{
                var html = `
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Name</h5>
                  <p class="card-text">${response.firstname} ${response.lastname}</p>
                  <h5 class="card-title">Registration-no</h5>
                  <p class="card-text">${response.regno}</p>
                  <h5 class="card-title">Email-id</h5>
                  <p class="card-text">${response.email}</p>
                  <h5 class="card-title">Father Name</h5>
                  <p class="card-text">${response.fathername}</p>
                  <h5 class="card-title">DOB</h5>
                  <p class="card-text">${response.dob}</p>
                  <h5 class="card-title">Address</h5>
                  <p class="card-text">${response.address}</p>
                </div>
              </div>
                `;
    app.innerHTML = html    
                //   $('#studentresponse').append(html);
                $("#registration_alert").hide();
            }
        }
    });
}else{
    reg_alert.innerHTML = "Please enter valid registration number"
}
})


