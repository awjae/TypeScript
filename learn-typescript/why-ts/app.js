// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

//에어를 사전에 방지하는 방법
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Adress} address
 */
/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}
fetchUser().then(function (response) {
  response.address.city;
})

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
      //innerText = [Object object] 이런경우를 타입을 통해 피할 수 있다
      // 에러의 사전방지

    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
