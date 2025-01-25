let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let mobileNumber = document.getElementById("mobile-number");
let address = document.getElementById("address");
let email = document.getElementById("email");
let addBtn = document.getElementById("add-btn")
let userTableBody = document.getElementById("user-table-body")
async function insertData() {
    try {
     
    const { error } = await supabase
    .from('User')
    .insert({  first_name: firstName.value, last_name: lastName.value, mobile_number: mobileNumber.value, address: address.value, email: email.value })
if (error) throw error   
getData()
    } catch (error) {
       console.log(error);
        
    }
}
async function getData(params) {
 try{
    const {  data, error } = await supabase
    .from('User')
    .select()
if (error) throw error
userTableBody.innerHTML = ""

if(data){for(let val of data){
   
    userTableBody.innerHTML += `
     <tr>
                <td scope="col">${val.first_name}</td>
                <td scope="col">${val.last_name}</td>
                <td scope="col">${val.email}</td>
                <td scope="col">${val.mobile_number}</td>
                <td scope="col">${val.address}</td>
              </tr>
    `}
}

  }   catch (error) {
    console.log(error);
  }
}

addBtn.addEventListener('click',insertData)
window.onload = getData()