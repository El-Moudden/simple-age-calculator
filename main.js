let btn = document.getElementById("btnInput");

let dateInput = document.getElementById("dateInput") ;

function calculateAge(){
  let birthday = dateInput.value;
 

  if (birthday === ""){
    document.getElementById("result").textContent = "Please Enter Your Birthday"
  } else {
    let age = getAge(birthday)
    document.getElementById("result").textContent = `Your Age is ${age}` ;
  }
}

function getAge(birthday) {
  let currentDate = new Date() ;
  let birthdayValue = new Date(birthday)
  age = currentDate.getFullYear() - birthdayValue.getFullYear()
  
  if (currentDate.getMonth() < birthdayValue.getMonth() || currentDate.getMonth() === birthdayValue.getMonth() && currentDate.getDate() < birthdayValue.getDate()) {

    age--
    
  }
  return age ;
  
};




btn.addEventListener("click", calculateAge)
