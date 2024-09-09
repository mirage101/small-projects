const btn = document.getElementById("calculate");

btn.addEventListener("click", calculateAge);

function calculateAge() {
  const dob = document.getElementById("dob").value;
  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const month = today.getMonth() - dobDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }
  document.getElementById("result").innerHTML = `Your age is ${age} years old`;
}
