let displayCart = document.querySelector("#cart");

const showCartUser = async() => {
  let dataUserJSON = localStorage.getItem("user")
  console.log(dataUserJSON)
  let dataUserObj = JSON.parse(dataUserJSON)
  console.log(dataUserObj)

  let displayUser = document.querySelector("#namaUser")
  displayUser.innerHTML = `<p>Hello, ${dataUserObj.name}</p>`

  const api = `https://6023a95a6bf3e6001766b546.mockapi.io/register/${dataUserObj.id}/cart`
  const response = await fetch(api)
  const results = await response.json()
  console.log(results)
  results.map((result) => {
    let displayItem = document.createElement("div")
    displayItem.innerHTML = `<p>${result.namaBarang}, ${result.price}</p>`

    displayCart.appendChild(displayItem)
  })
}
showCartUser()