const register = async () => {
  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  const passwordInput =  document.getElementById('password').value;

  let userData = {
    name: nameInput,
    email: emailInput,
    password: passwordInput
  }

  if(nameInput === "" || emailInput === "" || passwordInput === "") {
    alert("Please input your data")
  } else {
    let response = await fetch(
      "https://6023a95a6bf3e6001766b546.mockapi.io/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }
    )
    let result = await response.json();
    window.location.href = "../signin/index.html"
  }
}