const send = document.querySelector(".submit");

function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const tel = document.forms["contactForm"]["tel"].value;
  const message = document.forms["contactForm"]["message"].value;
  const error = "";
  if (name == "") {
    error += "Please enter your name.\n";
  }

  if (tel == "") {
    error += "Please enter your name.\n";
  }

  if (email == "") {
    error += "Please enter your email address.\n";
  } else if (!validateEmail(email)) {
    error += "Please enter a valid email address.\n";
  }

  if (message == "") {
    error += "Please enter a message.\n";
  }

  if (error != "") {
    alert(error);
    return false;
  }
}

send.addEventListener("click", (e) => {
  e.preventDefault();
  location = "./pages/submit.html";
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
