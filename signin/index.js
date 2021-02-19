const signin = () => {
  const emailInputSignin = document.getElementById("email").value;
  const passwordInputSignin = document.getElementById("password").value;

  if(emailInputSignin === "" || passwordInputSignin === "") {
    alert("Please input your data")
  } else {
    fetch("https://6023a95a6bf3e6001766b546.mockapi.io/register")
      .then((response) => response.json())
      .then((result) => {
        const user = result.find((user) => user.email === emailInputSignin && user.password === passwordInputSignin)
        let {password, ...userData} = user
        if(user) {
          localStorage.setItem("user", JSON.stringify(userData))
          localStorage.setItem("isLoggedin", true)
          alert("Login berhasil")
          window.location.href = "/cart/index.html"
        } else {
          alert("Login gagal")
        }
      })
      .catch((error) => console.log(error))
  }
}
