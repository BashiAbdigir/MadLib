document.getElementById("b1").addEventListener("click", results);

function results() {
  // Input: Retrieve the users
  let noun1 = document.getElementById("noun1").value;
  let adj1 = document.getElementById("adj1").value;
  let verb1 = document.getElementById("verb1").value;
  let noun2 = document.getElementById("noun2").value;

  // Processing: Make output statement
  let output = `There are too many ${noun1} on this ${adj1} airplane!". I screamed. Somebody
  has to ${verb1} on the ${noun2} to solve this problem.`;

  // Output: Display output in the "Your Order" section of the website
  document.getElementById("result").innerHTML = output;
}

document.getElementById("B2").addEventListener("click", results2);

function results2() {
  // Input: Retrieve the users
  let noun1 = document.getElementById("noun1").value;
  let adj1 = document.getElementById("adj1").value;
  let verb1 = document.getElementById("verb1").value;

  // Processing: Make output statement
  let output2 = ` “My ${noun1} loves to eat mangos ${adj1} and as they
  ${verb1}.”`;

  // Output: Display output in the "Your Order" section of the website
  document.getElementById("result2").innerHTML = output2;
}
