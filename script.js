const form = document.querySelector("form");

const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

firstName.setAttribute("placeholder", "First Name");
lastName.setAttribute("placeholder", "Last Name");
email.setAttribute("placeholder", "Email Address");
password.setAttribute("placeholder", "Password");

function formFunc() {
  let value = true;

  const firstNameText = document.querySelector("#firstname").value;
  const firstImgError = firstName.previousElementSibling;
  const firstTextError = firstName.nextElementSibling;

  if (firstNameText === "") {
    firstName.removeAttribute("placeholder");
    firstImgError.classList.remove("hidden");
    firstTextError.classList.remove("hidden");
    firstName.classList.add("redborder");
    value = false;
  } else {
    firstImgError.classList.add("hidden");
    firstTextError.classList.add("hidden");
    firstName.classList.remove("redborder");
  }

  const lastNameText = document.querySelector("#lastname").value;
  const secondImgError = lastName.previousElementSibling;
  const secondTextError = lastName.nextElementSibling;

  if (lastNameText === "") {
    lastName.removeAttribute("placeholder");
    secondImgError.classList.remove("hidden");
    secondTextError.classList.remove("hidden");
    lastName.classList.add("redborder");
    value = false;
  } else {
    secondImgError.classList.add("hidden");
    secondTextError.classList.add("hidden");
    lastName.classList.remove("redborder");
  }

  const emailText = document.querySelector("#email").value;
  const thirdImgError = email.previousElementSibling;
  const thirdTextError = email.nextElementSibling;

  if (!emailText.includes("@") || !emailText.includes(".")) {
    email.removeAttribute("placeholder");
    thirdImgError.classList.remove("hidden");
    thirdTextError.classList.remove("hidden");
    email.classList.add("redborder");
  } else {
    thirdImgError.classList.add("hidden");
    thirdTextError.classList.add("hidden");
    email.classList.remove("redborder");
  }

  const passwordText = document.querySelector("#password").value;
  const fourthImgError = password.previousElementSibling;
  const fourthTextError = password.nextElementSibling;

  if (passwordText === "") {
    password.removeAttribute("placeholder");
    fourthImgError.classList.remove("hidden");
    fourthTextError.classList.remove("hidden");
    password.classList.add("redborder");
  } else {
    fourthImgError.classList.add("hidden");
    fourthTextError.classList.add("hidden");
    password.classList.remove("redborder");
  }
  return value;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result = formFunc();
  if (result === true) {
    console.log("You claimed your trial sucessfully!");
    form.reset();
  } else {
    console.log("Something is missing");
  }
});
