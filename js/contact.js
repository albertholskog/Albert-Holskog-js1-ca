const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameErr = document.querySelector("#fullNameErr");

const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#subjectErr");

const address = document.querySelector("#address");
const addressErr = document.querySelector("#addressErr");

const email = document.querySelector("#email");
const emailErr = document.querySelector("#emailErr");

function validForm() {
  event.preventDefault();

  if (
    checkLength(fullName.value, 1) &&
    checkLength(subject.value, 10) &&
    checkLength(address.value, 25) &&
    Emailvalid(email.value)
  ) {
    fullNameErr.style.display = "none";
    subjectErr.style.display = "none";
    addressErr.style.display = "none";
    emailErr.style.display = "none";
    console.log("godkjent");
  } else {
    fullNameErr.style.display = "block";
    subjectErr.style.display = "block";
    addressErr.style.display = "block";
    emailErr.style.display = "block";
    console.log("fail");
  }
}

form.addEventListener("submit", validForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function Emailvalid(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  return regEx.test(email);
}
