const register = async() => {
  const nameInputReg = document.getElementById("name").value;
  const emailInputReg = document.getElementById("email").value;
  const passInputReg = document.getElementById("password").value;

  let userData = {
    name: nameInputReg,
    email: emailInputReg,
    password: passInputReg
  }
  
  if(nameInputReg === "" || emailInputReg === "" || passInputReg === "") {
    alert("Please input your data")
  } else {
    const api = "https://6023a95a6bf3e6001766b546.mockapi.io/register"
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    const result = await response.json();
    window.location.href = "/signin/index.html"
  }

}