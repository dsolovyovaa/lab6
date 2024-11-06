const apiUrl = "https://randomuser.me/api";
const button = document.getElementById("downloadButton");
const img = document.querySelector(".img");
const name = document.querySelector(".name");
const city = document.querySelector(".city");
const postcode = document.querySelector(".postcode");
const email = document.querySelector(".email");

button.addEventListener("click", request);

function request() {
  fetchData(apiUrl)
    .then((data) => {
      const userData = data.results[0];
      console.log(userData);

      const pictureUrl = userData.picture.large;
      img.src = pictureUrl;
      name.textContent =
        userData.name.title +
        " " +
        userData.name.first +
        " " +
        userData.name.last;
      city.textContent = userData.location.city;
      postcode.textContent = userData.location.postcode;
      email.textContent = userData.email;
    })
    .catch((error) => {
      console.error("Ошибка запроса:", error);
    });
}

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Ошибка сети"));
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
