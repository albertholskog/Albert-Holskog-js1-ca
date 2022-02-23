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

  if (checkLength(fullName.value, 1)) {
    fullNameErr.style.display = "none";
    console.log("godkjent full name");
  } else {
    fullNameErr.style.display = "block";
    console.log("fail 1");
  }
  if (emailValid(email.value)) {
    emailErr.style.display = "none";
    console.log("godkjent email");
  } else {
    emailErr.style.display = "block";
    console.log("fail 4");
  }
  if (checkLength(subject.value, 10)) {
    subjectErr.style.display = "none";
    console.log("godkjent subject");
  } else {
    subjectErr.style.display = "block";
    console.log("fail 2");
  }
  if (checkLength(address.value, 25)) {
    addressErr.style.display = "none";
    console.log("godkjent address");
  } else {
    addressErr.style.display = "block";
    console.log("fail 3");
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

function emailValid(email) {
  // bruker regEx fra en oppgave fra module 4
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
