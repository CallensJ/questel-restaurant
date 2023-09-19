const login = document.querySelector(".btn--login");
const signup = document.querySelector(".btn--signup");
const formLogin = document.querySelector(".form-login");
const formSignup = document.querySelector(".form-signup");



login.addEventListener("click", () => {
  console.log("active");
  formLogin.classList.add('active');
  formSignup.classList.remove('active');
});
signup.addEventListener("click", () => {
  formSignup.classList.add('active');
  formLogin.classList.remove('active');

});


