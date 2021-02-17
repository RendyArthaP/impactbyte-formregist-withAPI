const signin = () => {
  const emailInputSignIn = document.getElementById("email").value;
  const passwordInputSignIn = document.getElementById("password").value;

  if(emailInputSignIn === "" || passwordInputSignIn === "") {
    alert("Please input your data")
  } else {
    fetch("https://6023a95a6bf3e6001766b546.mockapi.io/register")
      .then((response) => response.json())
      .then((result) => {
        const user = result.filter((user) => user.email === emailInputSignIn);
        console.log(user);
        console.log(user.length);
        console.log(user[0]);
        if(user.length > 0) {
          alert("User di temukan")
          if(user[0].password === passwordInputSignIn) {
            localStorage.setItem("user", JSON.stringify(user[0]))
            alert("Login Success")
            window.location.href = "/cart/index.html"
          } else {
            alert("Password anda salah") 
          }
        } else {
          alert("User tidak ditemukan")
        }
      })
      .catch((error) => console.log(error));
  }
}