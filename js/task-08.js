const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formRef);
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  if (!email || !password) {
    alert("Заповніть усі поля!");
  } else {
    formData.forEach((value, name) => {
      console.log("name :", name);
      console.log("value :", value);
    });
      formRef.reset(event);
  }
});
