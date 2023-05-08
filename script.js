function generatePassword() {
    var length = document.getElementById("length").value,
        upperCase = document.getElementById("upper-case").checked,
        lowerCase = document.getElementById("lower-case").checked,
        numbers = document.getElementById("numbers").checked,
        symbols = document.getElementById("symbols").checked,
        charset = "",
        password = "";
    
    if (upperCase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerCase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      charset += "0123456789";
    }
    if (symbols) {
      charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    
    document.getElementById("password").value = password;
    document.getElementById("copy").style.display = "block";
  }
  
  function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
  }