function validata() {
  var username = document.getElementById("fname").value;
  var usrregex = "^[a-z A-Z]{2,10}$";

  var mobnum = document.getElementById("mobno").value;
  var mobregex = "^[0-9]{10}$";

  var gendermale = document.getElementById("male").checked;
  var genderfemale = document.getElementById("female").checked;

  var passwrd = document.getElementById("pass").value;
  var passregex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+-=|]).{8,32}$/;

  if (username === "") {
    // window.alert("User id is required");
    document.getElementById("usrerr").innerHTML = "Username is Required!";
    document.getElementById("usrerr").style.color = "red";
    return false;
  } else if (!username.match(usrregex)) {
    document.getElementById("usrerr").innerHTML =
      "Username should be in proper format.";
    document.getElementById("usrerr").style.color = "red";
    return false;
  } else {
    document.getElementById("usrerr").innerHTML = "Username is valid.";
    document.getElementById("usrerr").style.color = "green";
  }

  if (mobnum === "") {
    document.getElementById("moberr").innerHTML = "Mobile Number is Required!";
    document.getElementById("moberr").style.color = "red";
    return false;
  } else if (!mobnum.match(mobregex)) {
    document.getElementById("moberr").innerHTML =
      "Mobile Number should be 10 digit.";
    document.getElementById("moberr").style.color = "red";
    return false;
  } else {
    document.getElementById("moberr").innerHTML = "Mobile Number is valid.";
    document.getElementById("moberr").style.color = "green";
  }

  if (!gendermale && !genderfemale) {
    document.getElementById("generr").innerHTML = "Please select your gender";
    document.getElementById("generr").style.color = "red";
    return false;
  } else {
    document.getElementById("generr").innerHTML = "";
  }

  if (passwrd === "") {
    document.getElementById("passerr").innerHTML = "Password is Required!";
    document.getElementById("passerr").style.color = "red";
    return false;
  } else if (!passwrd.match(passregex)) {
    document.getElementById("passerr").innerHTML =
      "Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
    document.getElementById("passerr").style.color = "red";
    return false;
  } else {
    document.getElementById("passerr").innerHTML = "Password is valid.";
    document.getElementById("passerr").style.color = "green";
  }
}
