
//calculate birth year
function calculate() {
	
    //local variables
    let number = document.getElementById("number").value;
    let dob = document.querySelector('#dob').value;
    let ageOfDate = document.querySelector('#ageOfDate').value;

    if (number == "" || number == 0) {
        
        window.alert("Please type your correct age!");
        return;
    }
    
    //calculating the year
    let date = new Date().getFullYear();
    let birthyear =  date - number;

   let dobYear = document.getElementById("dobYear")
        dobYear.style.display = "block" 
          dobYear.innerHTML = `Your birth year is: ${birthyear}. `;
}

  dobYear.style.display = "none"
  document.getElementById("button").onclick = function() {  calculate();  };



// calculate age
function calculateAge() {
	
  //local variables
  
  let dob = document.querySelector('#dob').value;
  let ageOfDate = document.querySelector('#ageOfDate').value;
  
  let year = Number(dob.substring(0,4));
  let month = Number(dob.substring(7,5));
  let day = Number(dob.substring(10,8));
 

  // Future Year, Month & Day selected by user
  let yearInFuture = Number(ageOfDate.substring(0,4))
  let monthInFuture = Number(ageOfDate.substring(7,5))
  let dayInFuture= Number(ageOfDate.substring(10,8))
  // console.log(monthInFuture);

  // Expected Age, Month & Day
  let ageExpected = yearInFuture  - year;
    console.log(ageExpected);
  let monthExpected = Math.abs(monthInFuture - month)
   console.log(monthExpected);
  let dayExpected =  Math.abs(dayInFuture - day);
   console.log(dayExpected);
  
   if (ageExpected < 0 || yearInFuture < 0) {
    alert("Please enter Age at Date of correctly. It should be greater than your DOB")
      return
  }

  document.getElementById("displayAge").innerHTML = `
  You will be ${ageExpected} years, ${monthExpected} month(s) and  ${dayExpected} days(s).`;
}
 

let ageButton =document.getElementById("ageButton")
ageButton.addEventListener('click', calculateAge )
