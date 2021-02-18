const signin = () => {
  const emailInputSignIn = document.getElementById("email").value;
  const passwordInputSignIn = document.getElementById("password").value;

  if(emailInputSignIn === "" || passwordInputSignIn === "") {
    alert("Please input your data")
  } else {
    fetch("https://6023a95a6bf3e6001766b546.mockapi.io/register")
      .then((response) => response.json())
      .then((result) => {
        // filter
        // const user = result.filter((user) => user.email === emailInputSignIn);

        // if(user.length > 0) {
        //   alert("User di temukan")
        //   if(user[0].password === passwordInputSignIn) {
        //     localStorage.setItem("user", JSON.stringify(user[0]))
        //     alert("Login Success")
        //     window.location.href = "/cart/index.html"
        //   } else {
        //     alert("Password anda salah") 
        //   }
        // } else {
        //   alert("User tidak ditemukan")
        // }

        // find
        const user = result.find((user) => user.email === emailInputSignIn && user.password === passwordInputSignIn)
        
        if(emailInputSignIn === "" || passwordInputSignIn === "") {
          alert("Please input your data")
        } else {
          if(user) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("isLoggedin", true);
            alert("login berhasil");
            window.location.href = "/cart/index.html";
          } else {
            alert("login gagal");
          }
        }
      })
      .catch((error) => console.log(error));
  }
}